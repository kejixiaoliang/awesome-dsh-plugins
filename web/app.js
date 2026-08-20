(function () {
  'use strict';

  const DATA = window.__DSH_DATA__;
  if (!DATA || !Array.isArray(DATA.plugins)) {
    document.getElementById('grid').innerHTML =
      '<p style="color:#6b7280">数据加载失败：请先运行 <code>node scripts/gen-web-data.mjs</code> 生成 web/data.js。</p>';
    return;
  }

  const plugins = DATA.plugins;
  const categories = DATA.categories || [];

  const els = {
    stats: document.getElementById('stats'),
    search: document.getElementById('search'),
    clearSearch: document.getElementById('clear-search'),
    sort: document.getElementById('sort'),
    chips: document.getElementById('chips'),
    grid: document.getElementById('grid'),
    empty: document.getElementById('empty'),
    resultCount: document.getElementById('result-count'),
    backdrop: document.getElementById('modal-backdrop'),
    modalBody: document.getElementById('modal-body'),
    modalClose: document.getElementById('modal-close'),
    toast: document.getElementById('toast'),
  };

  const state = { query: '', category: null, sort: 'stars-desc' };

  // ---------- 工具 ----------
  function formatStars(n) {
    if (typeof n !== 'number' || Number.isNaN(n)) return null;
    if (n >= 1000) {
      const v = (n / 1000).toFixed(1).replace(/\.0$/, '');
      return v + 'k';
    }
    return String(n);
  }

  function escapeHtml(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function categoryById(id) {
    return categories.find((c) => c.id === id) || null;
  }

  function catLabel(id) {
    const c = categoryById(id);
    return c ? c.zh : id;
  }

  let toastTimer = null;
  function showToast(msg) {
    els.toast.textContent = msg;
    els.toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => els.toast.classList.remove('show'), 1800);
  }

  // 复制（Clipboard API + 降级方案）
  function copyText(text) {
    if (!text) return Promise.resolve(false);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).then(() => true, () => fallbackCopy(text));
    }
    return Promise.resolve(fallbackCopy(text));
  }
  function fallbackCopy(text) {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(ta);
      return ok;
    } catch {
      return false;
    }
  }

  // ---------- 渲染：统计 ----------
  function renderStats() {
    const total = plugins.length;
    const catCount = categories.length;
    const withInstall = plugins.filter((p) => p.install).length;
    els.stats.innerHTML =
      `<span class="stat"><b>${total}</b>插件</span>` +
      `<span class="stat"><b>${catCount}</b>分类</span>` +
      `<span class="stat"><b>${withInstall}</b>可一键安装</span>`;
  }

  // ---------- 渲染：分类 chips ----------
  function categoryCounts() {
    const map = {};
    for (const p of plugins) map[p.category] = (map[p.category] || 0) + 1;
    return map;
  }

  function renderChips() {
    const counts = categoryCounts();
    let html = `<button class="chip ${state.category === null ? 'active' : ''}" data-cat="">全部<span class="chip-count">${plugins.length}</span></button>`;
    for (const c of categories) {
      const n = counts[c.id] || 0;
      const active = state.category === c.id ? 'active' : '';
      html += `<button class="chip ${active}" data-cat="${escapeHtml(c.id)}">${escapeHtml(c.zh)}<span class="chip-count">${n}</span></button>`;
    }
    els.chips.innerHTML = html;
  }

  // ---------- 过滤 + 排序 ----------
  function filteredPlugins() {
    const q = state.query.trim().toLowerCase();
    let list = plugins;
    if (state.category !== null) {
      list = list.filter((p) => p.category === state.category);
    }
    if (q) {
      list = list.filter((p) => {
        const hay = [
          p.name, p.owner, p.repo, p.description, p.install,
          catLabel(p.category),
        ].filter(Boolean).join(' ').toLowerCase();
        return hay.includes(q);
      });
    }
    const sorted = [...list];
    if (state.sort === 'stars-desc') {
      sorted.sort((a, b) => (b.stars ?? -1) - (a.stars ?? -1));
    } else if (state.sort === 'stars-asc') {
      sorted.sort((a, b) => (a.stars ?? -1) - (b.stars ?? -1));
    } else if (state.sort === 'name-asc') {
      sorted.sort((a, b) => a.name.localeCompare(b.name, 'zh'));
    }
    return sorted;
  }

  function renderGrid() {
    const list = filteredPlugins();
    els.resultCount.textContent = `共 ${list.length} 个插件`;
    els.empty.hidden = list.length !== 0;

    if (list.length === 0) {
      els.grid.innerHTML = '';
      return;
    }

    els.grid.innerHTML = list.map((p) => {
      const star = formatStars(p.stars);
      const install = p.install || '';
      const installHtml = install
        ? `<code class="card-install">${escapeHtml(install)}</code>`
        : `<code class="card-install none">无安装命令</code>`;
      return (
        `<article class="card" data-url="${escapeHtml(p.url)}" data-name="${escapeHtml(p.name)}">` +
          `<div class="card-top">` +
            `<span class="card-name">${escapeHtml(p.name)}</span>` +
            (star ? `<span class="card-stars"><span class="star-ico">⭐</span> ${escapeHtml(star)}</span>` : '') +
          `</div>` +
          `<p class="card-desc">${escapeHtml(p.description)}</p>` +
          `<div class="card-meta">` +
            `<span class="cat-badge">${escapeHtml(catLabel(p.category))}</span>` +
          `</div>` +
          installHtml +
        `</article>`
      );
    }).join('');

    els.grid.querySelectorAll('.card').forEach((card) => {
      card.addEventListener('click', () => openModal(card.dataset.url));
    });
  }

  // ---------- 详情弹窗 ----------
  function openModal(url) {
    const p = plugins.find((x) => x.url === url);
    if (!p) return;

    const star = formatStars(p.stars);
    const fullName = p.owner ? `${p.owner}/${p.repo}` : p.name;
    const install = p.install || '';

    const badges =
      (star ? `<span class="badge star-badge"><span class="star-ico">⭐</span> ${escapeHtml(star)}</span>` : '') +
      `<span class="badge">${escapeHtml(catLabel(p.category))}</span>`;

    const installBlock = install
      ? `<div class="install-row"><code class="install-cmd">${escapeHtml(install)}</code>` +
        `<button class="copy-btn" data-copy="${escapeHtml(install)}">复制</button></div>`
      : `<code class="install-cmd none">该条目暂无安装命令</code>`;

    els.modalBody.innerHTML =
      `<h2 class="modal-name">${escapeHtml(p.name)}</h2>` +
      `<div class="modal-repo">${escapeHtml(fullName)}</div>` +
      `<div class="modal-badges">${badges}</div>` +
      `<p class="modal-desc">${escapeHtml(p.description)}</p>` +
      `<div class="modal-section">` +
        `<h3>安装</h3>` +
        installBlock +
      `</div>` +
      `<div class="modal-section">` +
        `<h3>仓库</h3>` +
        `<div class="modal-links">` +
          `<a href="${escapeHtml(p.url)}" target="_blank" rel="noopener">在 GitHub 打开 ↗</a>` +
        `</div>` +
      `</div>`;

    const copyBtn = els.modalBody.querySelector('.copy-btn');
    if (copyBtn) {
      copyBtn.addEventListener('click', async () => {
        const ok = await copyText(copyBtn.dataset.copy);
        showToast(ok ? '已复制安装命令 ✓' : '复制失败，请手动复制');
      });
    }

    els.backdrop.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    els.backdrop.hidden = true;
    document.body.style.overflow = '';
  }

  // ---------- 事件绑定 ----------
  let searchDebounce = null;
  els.search.addEventListener('input', () => {
    state.query = els.search.value;
    els.clearSearch.hidden = els.search.value.length === 0;
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(renderGrid, 120);
  });

  els.clearSearch.addEventListener('click', () => {
    els.search.value = '';
    state.query = '';
    els.clearSearch.hidden = true;
    renderGrid();
    els.search.focus();
  });

  els.sort.addEventListener('change', () => {
    state.sort = els.sort.value;
    renderGrid();
  });

  els.chips.addEventListener('click', (e) => {
    const btn = e.target.closest('.chip');
    if (!btn) return;
    state.category = btn.dataset.cat || null;
    renderChips();
    renderGrid();
  });

  els.modalClose.addEventListener('click', closeModal);
  els.backdrop.addEventListener('click', (e) => {
    if (e.target === els.backdrop) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !els.backdrop.hidden) closeModal();
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      els.search.focus();
    }
  });

  // ---------- 启动 ----------
  renderStats();
  renderChips();
  renderGrid();
})();

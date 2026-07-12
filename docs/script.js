// ==========================================================================
// Smooth scrolling for nav links
// ==========================================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.length <= 1) return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ==========================================================================
// Navbar shadow on scroll
// ==========================================================================
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 50
        ? '0 4px 24px rgba(0, 0, 0, 0.35)'
        : 'none';
}, { passive: true });

// ==========================================================================
// Scroll-triggered reveal animations
// ==========================================================================
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

// ==========================================================================
// Curriculum Accordion
// ==========================================================================
const accItems = document.querySelectorAll('.acc-item');

function setAccHeight(item, open) {
    const panel = item.querySelector('.acc-panel');
    const header = item.querySelector('.acc-header');
    if (open) {
        item.classList.add('is-open');
        header.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = panel.scrollHeight + 'px';
    } else {
        item.classList.remove('is-open');
        header.setAttribute('aria-expanded', 'false');
        panel.style.maxHeight = '0px';
    }
}

accItems.forEach(item => {
    const header = item.querySelector('.acc-header');
    // initialize state
    setAccHeight(item, item.classList.contains('is-open'));

    header.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');
        // close all others (single-open accordion)
        accItems.forEach(other => { if (other !== item) setAccHeight(other, false); });
        setAccHeight(item, !isOpen);
    });
});

// Recalculate open panel height on resize (in case content reflows)
window.addEventListener('resize', () => {
    accItems.forEach(item => {
        if (item.classList.contains('is-open')) {
            const panel = item.querySelector('.acc-panel');
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    });
});

// ==========================================================================
// Asset Tabs
// ==========================================================================
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.tab;

        tabButtons.forEach(b => {
            b.classList.remove('is-active');
            b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('is-active');
        btn.setAttribute('aria-selected', 'true');

        tabPanels.forEach(p => {
            p.classList.toggle('is-active', p.dataset.panel === target);
        });
    });
});

// ==========================================================================
// Animated stat counters
// ==========================================================================
const counters = document.querySelectorAll('[data-counter]');

function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10) || 0;
    const suffix = el.dataset.suffix || '';
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.round(eased * target);
        el.textContent = value + suffix;
        if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
}

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

counters.forEach(el => counterObserver.observe(el));

// ==========================================================================
// Hero terminal typewriter
// ==========================================================================
const terminalBody = document.getElementById('terminalBody');

const codeLines = [
    { html: '<span class="tok-com"># Welcome to Python in Arabic</span>' },
    { html: '<span class="tok-kw">name</span> = <span class="tok-str">"Youssef"</span>' },
    { html: '<span class="tok-kw">lessons</span> = [<span class="tok-str">"Basics"</span>, <span class="tok-str">"Lists"</span>, <span class="tok-str">"Functions"</span>, <span class="tok-str">"NumPy"</span>]' },
    { html: '' },
    { html: '<span class="tok-fn">print</span>(<span class="tok-str">f"Let\'s learn, {name}! 🐍"</span>)' },
    { html: '<span class="tok-com">&gt;&gt;&gt; Let\'s learn, Youssef! 🐍</span>' },
];

function buildTerminal() {
    if (!terminalBody) return;
    terminalBody.innerHTML = '';

    let lineIndex = 0;

    function typeNextLine() {
        if (lineIndex >= codeLines.length) {
            // add blinking caret at the end
            const caretLine = document.createElement('div');
            caretLine.className = 'terminal-line';
            caretLine.innerHTML = `<span class="ln">${lineIndex + 1}</span><span class="code"><span class="terminal-caret"></span></span>`;
            terminalBody.appendChild(caretLine);
            return;
        }

        const lineEl = document.createElement('div');
        lineEl.className = 'terminal-line';
        lineEl.innerHTML = `<span class="ln">${lineIndex + 1}</span><span class="code">${codeLines[lineIndex].html}</span>`;
        terminalBody.appendChild(lineEl);

        lineIndex++;
        setTimeout(typeNextLine, 260);
    }

    typeNextLine();
}

const terminalObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            buildTerminal();
            terminalObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

if (terminalBody) terminalObserver.observe(terminalBody.closest('.terminal'));

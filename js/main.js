/**
 * Main JS — Navbar, Scroll, Animations, Canvas Background
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMobileMenu();
    initScrollAnimations();
    initCountUp();
    initMatrixBg();
    initTypingEffect();
});

/* Navbar scroll effect */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

/* Mobile menu toggle */
function initMobileMenu() {
    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('nav-menu');
    if (!toggle || !menu) return;
    
    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        toggle.classList.toggle('active');
    });
    
    // Close on link click
    menu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            toggle.classList.remove('active');
        });
    });
}

/* Scroll reveal animations */
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.skill-category, .project-card, .timeline-item, .stat-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add CSS class when visible
    const style = document.createElement('style');
    style.textContent = `
        .visible { opacity: 1 !important; transform: translateY(0) !important; }
    `;
    document.head.appendChild(style);
}

/* Count up animation for stats */
function initCountUp() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.count);
                animateCount(el, target);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-number').forEach(el => observer.observe(el));
}

function animateCount(el, target) {
    const duration = 2000;
    const start = performance.now();
    
    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(eased * target);
        el.textContent = current + (target === 99 ? '%' : '+');
        if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

/* Matrix / Digital Rain Background */
function initMatrixBg() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let width, height;
    
    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);
    
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops = Array(columns).fill(1);
    
    function draw() {
        ctx.fillStyle = 'rgba(10, 10, 15, 0.05)';
        ctx.fillRect(0, 0, width, height);
        
        ctx.fillStyle = '#00ff41';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const char = chars[Math.floor(Math.random() * chars.length)];
            const x = i * fontSize;
            const y = drops[i] * fontSize;
            
            // Randomly highlight some characters
            if (Math.random() > 0.975) {
                ctx.fillStyle = '#00f0ff';
                ctx.shadowBlur = 8;
                ctx.shadowColor = '#00f0ff';
            } else {
                ctx.fillStyle = 'rgba(0, 255, 65, 0.35)';
                ctx.shadowBlur = 0;
            }
            
            ctx.fillText(char, x, y);
            ctx.shadowBlur = 0;
            
            if (y > height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
        requestAnimationFrame(draw);
    }
    draw();
}

/* Hero typing effect */
function initTypingEffect() {
    const el = document.getElementById('hero-typing');
    if (!el) return;
    
    const words = ['Infraestrutura', 'DevOps', 'Cloud', 'Observabilidade', 'Segurança'];
    let wordIdx = 0;
    let charIdx = 0;
    let deleting = false;
    
    function type() {
        const word = words[wordIdx];
        if (deleting) {
            el.textContent = word.substring(0, charIdx - 1);
            charIdx--;
        } else {
            el.textContent = word.substring(0, charIdx + 1);
            charIdx++;
        }
        
        let speed = deleting ? 60 : 120;
        if (!deleting && charIdx === word.length) {
            speed = 2000;
            deleting = true;
        } else if (deleting && charIdx === 0) {
            deleting = false;
            wordIdx = (wordIdx + 1) % words.length;
            speed = 500;
        }
        
        setTimeout(type, speed);
    }
    type();
}

document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        en: {
            nav: {
                services: 'Services',
                process: 'Process',
                pricing: 'Pricing',
                work: 'Work',
                about: 'About',
                contact: 'Get Started'
            }
        },
        ms: {
            nav: {
                services: 'Perkhidmatan',
                process: 'Proses',
                pricing: 'Harga',
                work: 'Portfolio',
                about: 'Tentang',
                contact: 'Mula Sekarang'
            }
        }
    };

    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- LANGUAGE SWITCHER (nav only) ---
    // Use classes to support multiple buttons (mobile & desktop)
    const langBtns = document.querySelectorAll('.lang-btn, #lang-toggle');
    let currentLang = localStorage.getItem('site_lang') || 'ms';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('site_lang', lang);
        document.documentElement.lang = lang;

        // Update all language texts
        document.querySelectorAll('.lang-text').forEach(el => {
            el.textContent = lang === 'en' ? 'EN' : 'MS';
        });

        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const keys = key.split('.');
            let value = translations[lang];

            for (const k of keys) {
                if (value && value[k]) {
                    value = value[k];
                } else {
                    value = null;
                    break;
                }
            }

            if (value) {
                element.textContent = value;
            }
        });
    }

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const newLang = currentLang === 'en' ? 'ms' : 'en';
            setLanguage(newLang);
        });
    });

    setLanguage(currentLang);

    // --- THEME SWITCHER ---
    const themeBtns = document.querySelectorAll('.theme-btn, #theme-toggle');
    const savedTheme = localStorage.getItem('site_theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    let currentTheme = savedTheme || systemTheme;

    function setTheme(theme) {
        currentTheme = theme;
        localStorage.setItem('site_theme', theme);

        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            document.body.classList.add('dark-mode');

            // Update all theme icons
            document.querySelectorAll('.theme-btn i, #theme-toggle i').forEach(icon => {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            });
        } else {
            document.documentElement.classList.remove('dark');
            document.body.classList.remove('dark-mode');

            // Update all theme icons
            document.querySelectorAll('.theme-btn i, #theme-toggle i').forEach(icon => {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            });
        }
    }

    themeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    });

    // Initialize theme
    setTheme(currentTheme);

    // --- MOBILE MENU ---
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('active');
            mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }
});

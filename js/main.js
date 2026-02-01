/**
 * Elevate Digital Solutions - Main JavaScript
 * Professional portfolio website functionality
 */

document.addEventListener('DOMContentLoaded', function () {
    // --- LANGUAGE SWITCHER ---
    const translations = {
        en: {
            nav: {
                services: 'Services',
                process: 'Process',
                pricing: 'Pricing',
                work: 'Work',
                about: 'About',
                contact: 'Get Started'
            },
            filters: {
                all: 'All',
                landing: 'Landing Page',
                system: 'Web System',
                apps: 'Apps',
                project: 'Project'
            },
            hero: {
                title: 'Professional Digital Architecture for Business Growth',
                subtitle: 'Building high-conversion websites and scalable internal systems for SMEs and enterprises. Production-ready solutions, not prototypes.',
                cta_primary: 'Get a Website Built for Your Business',
                cta_secondary: 'See portfolio of work',
                tech_stack: 'Powering solutions with modern technology:'
            },
            metrics: {
                title: 'Proven Delivery Scale',
                subtitle: 'Measurable results delivered to real businesses',
                card1: {
                    title: 'Landing Pages Delivered',
                    desc: 'Conversion-focused, A/B tested pages driving business results'
                },
                card2: {
                    title: 'Internal SaaS Systems Built',
                    desc: 'Used daily by operational teams in production environments'
                },
                card3: {
                    title: 'Production Experience',
                    desc: 'From concept to deployment & ongoing maintenance'
                },
                note: 'Work utilized by companies in retail, logistics, and professional services'
            },
            services: {
                title: 'Business Solutions',
                subtitle: 'Specialized services designed to meet commercial objectives',
                card1: {
                    title: 'Landing Page Development',
                    desc: 'High-converting pages for campaigns, product launches, and lead generation. Built for performance and clarity.'
                },
                card2: {
                    title: 'Corporate Website Development',
                    desc: 'Authoritative, brand-aligned websites that establish credibility and facilitate stakeholder engagement.'
                },
                card3: {
                    title: 'Internal System & SaaS Development',
                    desc: 'Streamline operations with custom-built web applications, admin panels, and management tools.'
                },
                card4: {
                    title: 'Website Redesign & Optimization',
                    desc: 'Modernize existing sites for better user experience, speed, and alignment with current business goals.'
                }
            },
            process: {
                title: 'Structured Delivery',
                subtitle: 'A proven workflow ensuring quality and timeline adherence',
                step1: {
                    title: 'Requirement & Strategy',
                    desc: 'Business objective alignment, scope definition, and detailed planning phase.'
                },
                step2: {
                    title: 'Design & Structure',
                    desc: 'Wireframing, UI/UX design focused on user flows and brand representation.'
                },
                step3: {
                    title: 'Development & Testing',
                    desc: 'Build, integrate, and rigorously test for performance, security, and reliability.'
                },
                step4: {
                    title: 'Delivery & Support',
                    desc: 'Launch, handover, documentation, and provision of ongoing support options.'
                }
            },
            pricing: {
                title: 'Pricing',
                subtitle: 'Choose the package that fits your business needs. All packages include domain, hosting, and full technical maintenance for 1 year.',
                landing: {
                    title: 'Landing Page / 1-Page Website',
                    price: 'RM490 – RM890',
                    f1: '1-page premium landing design',
                    f2: 'Optional payment gateway / OnPay (+RM200)',
                    f3: '1 year domain & hosting',
                    f4: '1 year technical maintenance',
                    f5: 'Professional copywriting',
                    f6: 'Mobile & speed optimized',
                    f7: 'WhatsApp integration',
                    cta: 'Contact to Start'
                },
                corporate: {
                    badge: 'Most Popular',
                    title: 'Business / Corporate Website',
                    price: 'Starts from RM990',
                    f1: 'Up to 10 structured pages',
                    f2: 'Profile, services, forms',
                    f3: '1 year domain & hosting',
                    f4: '1 year technical maintenance',
                    f5: 'Full design & copywriting',
                    f6: 'SEO-ready structure',
                    f7: 'Branding-consistent visuals',
                    cta: 'Contact for Quotation'
                },
                ecommerce: {
                    title: 'E-Commerce Website',
                    price: 'Starts from RM1,890',
                    f1: 'WooCommerce / Shopify',
                    f2: 'Full store setup & checkout',
                    f3: 'Payment gateway integration',
                    f4: 'Product & category setup',
                    f5: 'Speed & security optimized',
                    f6: '1 year maintenance included',
                    f7: 'Basic ads tracking setup',
                    cta: 'Discuss Your Store'
                }
            },
            about: {
                title: 'Professional Digital Builder',
                desc1: 'A Diploma in Information Technology graduate from KPTM Batu Pahat, equipped with hands-on, production-level experience building digital solutions for real business use cases.',
                desc2: 'My approach is pragmatic and results-oriented: understanding commercial objectives first, then applying robust technical execution to deliver websites and systems that perform reliably at scale.',
                desc3: 'I work directly with business owners, managers, and marketing teams to translate requirements into effective digital assets that drive growth and operational efficiency.',
                cred1: 'Diploma in Information Technology (KPTM Batu Pahat)',
                cred2: 'Production-level business system development'
            },
            contact: {
                title: 'Ready to Build Your Digital Presence?',
                subtitle: "Let's discuss your project requirements. I provide clear proposals, transparent timelines, and professional delivery.",
                whatsapp: 'Start a Conversation on WhatsApp',
                email: 'Send an Email Inquiry',
                note: 'Response time: Within 24 hours during business days'
            },
            footer: {
                tagline: 'Professional web development for business growth',
                location: 'Based in Batu Pahat, Johor | Serving clients nationwide'
            },
            testimonials: {
                title: 'Client Success Stories',
                subtitle: 'What business owners say about working with me',
                q1: '"The system Aniq built completely transformed how we manage our logistics. It\'s fast, reliable, and exactly what we needed. Highly recommended!"',
                a1: { name: 'Azman Zulkifli', role: 'Operations Manager, Logistik Maju' },
                q2: '"Professional delivery and excellent communication. He understood our brand vision and delivered a landing page that converts."',
                a2: { name: 'Sarah Lee', role: 'Founder, Glow Beauty' },
                q3: '"Technical maintenance is top-notch. Whenever we have an issue, it\'s resolved within hours. A true technical partner."',
                a3: { name: 'David Khoo', role: 'Director, TechStart Solutions' }
            },
            faq: {
                title: 'Frequently Asked Questions',
                subtitle: 'Common questions about my services',
                q1: 'How long does it take to build a website?',
                a1: 'For a standard Landing Page, it takes 3-5 days. For a Corporate Website (up to 10 pages), it takes about 2-3 weeks. Complex systems depend on requirements.',
                q2: 'Do you provide hosting and domain?',
                a2: 'Yes, all my packages include FREE domain (.com/.my) and high-speed hosting for the first year. I handle all the technical setup.',
                q3: 'Is there any maintenance fee?',
                a3: 'The first year of maintenance is included. After year 1, there is a renewal fee (Domain + Hosting + Maintenance) starting from RM350/year depending on the package.',
                q4: 'Can I update the website content myself?',
                a4: 'Yes! I build websites using user-friendly CMS platforms. I provide a video tutorial on how to edit text and images easily.'
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
            },
            hero: {
                title: 'Arkitektur Digital Profesional untuk Pertumbuhan Bisnes',
                subtitle: 'Membina laman web penukaran tinggi dan sistem dalaman berskala untuk PKS dan korporat. Penyelesaian sedia produksi, bukan prototaip.',
                cta_primary: 'Buat Laman Web untuk Bisnes Anda',
                cta_secondary: 'Lihat portfolio kerja',
                tech_stack: 'Memperkasakan solusi dengan teknologi moden:'
            },
            metrics: {
                title: 'Skala Penghantaran Terbukti',
                subtitle: 'Hasil terukur yang disampaikan kepada perniagaan sebenar',
                card1: {
                    title: 'Landing Page Dihantar',
                    desc: 'Halaman berfokuskan penukaran yang diuji A/B memacu hasil perniagaan'
                },
                card2: {
                    title: 'Sistem SaaS Dalaman Dibina',
                    desc: 'Digunakan setiap hari oleh pasukan operasi dalam persekitaran produksi'
                },
                card3: {
                    title: 'Pengalaman Produksi',
                    desc: 'Dari konsep hingga penggunaan & penyelenggaraan berterusan'
                },
                note: 'Kerja digunakan oleh syarikat dalam peruncitan, logistik, dan perkhidmatan profesional'
            },
            services: {
                title: 'Penyelesaian Perniagaan',
                subtitle: 'Perkhidmatan khusus direka untuk memenuhi objektif komersial',
                card1: {
                    title: 'Pembangunan Landing Page',
                    desc: 'Halaman penukaran tinggi untuk kempen, pelancaran produk, dan penjanaan petunjuk. Dibina untuk prestasi dan kejelasan.'
                },
                card2: {
                    title: 'Pembangunan Laman Web Korporat',
                    desc: 'Laman web berwibawa selaras jenama yang membina kredibiliti dan memudahkan penglibatan pihak berkepentingan.'
                },
                card3: {
                    title: 'Sistem Dalaman & Pembangunan SaaS',
                    desc: 'Perkemas operasi dengan aplikasi web tersuai, panel admin, dan alat pengurusan.'
                },
                card4: {
                    title: 'Reka Semula & Pengoptimuman Web',
                    desc: 'Modenkan laman sedia ada untuk pengalaman pengguna, kelajuan, dan penjajaran matlamat perniagaan yang lebih baik.'
                }
            },
            process: {
                title: 'Penghantaran Berstruktur',
                subtitle: 'Aliran kerja terbukti memastikan kualiti dan pematuhan garis masa',
                step1: {
                    title: 'Keperluan & Strategi',
                    desc: 'Penyelarasan objektif perniagaan, definisi skop, dan fasa perancangan terperinci.'
                },
                step2: {
                    title: 'Reka Bentuk & Struktur',
                    desc: 'Wireframing, reka bentuk UI/UX tertumpu kepada aliran pengguna dan perwakilan jenama.'
                },
                step3: {
                    title: 'Pembangunan & Pengujian',
                    desc: 'Bina, integrasi, dan uji dengan teliti untuk prestasi, keselamatan, dan kebolehpercayaan.'
                },
                step4: {
                    title: 'Penghantaran & Sokongan',
                    desc: 'Pelancaran, serahan, dokumentasi, dan penyediaan pilihan sokongan berterusan.'
                }
            },
            pricing: {
                title: 'Harga',
                subtitle: 'Pilih pakej yang sesuai dengan keperluan perniagaan anda. Semua pakej termasuk domain, hosting, dan penyelenggaraan teknikal penuh selama 1 tahun.',
                landing: {
                    title: 'Landing Page / Laman 1-Muka',
                    price: 'RM490 – RM890',
                    f1: 'Reka bentuk landing page premium',
                    f2: 'Gerbang pembayaran pilihan / OnPay (+RM200)',
                    f3: '1 tahun domain & hosting',
                    f4: '1 tahun penyelenggaraan teknikal',
                    f5: 'Penulisan ayat jualan profesional',
                    f6: 'Dioptimumkan untuk mudah alih & kelajuan',
                    f7: 'Integrasi WhatsApp',
                    cta: 'Hubungi untuk Mula'
                },
                corporate: {
                    badge: 'Paling Popular',
                    title: 'Laman Web Perniagaan / Korporat',
                    price: 'Bermula dari RM990',
                    f1: 'Sehingga 10 halaman berstruktur',
                    f2: 'Profil, perkhidmatan, borang',
                    f3: '1 tahun domain & hosting',
                    f4: '1 tahun penyelenggaraan teknikal',
                    f5: 'Reka bentuk & penulisan penuh',
                    f6: 'Struktur sedia SEO',
                    f7: 'Visual konsisten jenama',
                    cta: 'Hubungi untuk Sebut Harga'
                },
                ecommerce: {
                    title: 'Laman Web E-Dagang',
                    price: 'Bermula dari RM1,890',
                    f1: 'WooCommerce / Shopify',
                    f2: 'Persediaan kedai & pembayaran penuh',
                    f3: 'Integrasi gerbang pembayaran',
                    f4: 'Persediaan produk & kategori',
                    f5: 'Dioptimumkan kelajuan & keselamatan',
                    f6: 'Termasuk 1 tahun penyelenggaraan',
                    f7: 'Persediaan tracking iklan asas',
                    cta: 'Bincang Kedai Anda'
                }
            },
            about: {
                title: 'Pembina Digital Profesional',
                desc1: 'Graduan Diploma Teknologi Maklumat dari KPTM Batu Pahat, dilengkapi dengan pengalaman praktikal membina penyelesaian digital untuk kes penggunaan perniagaan sebenar.',
                desc2: 'Pendekatan saya pragmatik dan berorientasikan hasil: memahami objektif komersial dahulu, kemudian menerapkan pelaksanaan teknikal yang teguh untuk menyampaikan laman web dan sistem yang berprestasi pada skala besar.',
                desc3: 'Saya bekerjasama secara langsung dengan pemilik perniagaan, pengurus, dan pasukan pemasaran untuk menterjemahkan keperluan kepada aset digital yang berkesan memacu pertumbuhan dan kecekapan operasi.',
                cred1: 'Diploma Teknologi Maklumat (KPTM Batu Pahat)',
                cred2: 'Pembangunan sistem perniagaan tahap produksi'
            },
            contact: {
                title: 'Bersedia Membina Kehadiran Digital Anda?',
                subtitle: "Mari bincangkan keperluan projek anda. Saya menyediakan cadangan jelas, garis masa telus, dan penghantaran profesional.",
                whatsapp: 'Mulakan Perbualan di WhatsApp',
                email: 'Hantar Pertanyaan E-mel',
                note: 'Masa respon: Dalam 24 jam hari bekerja'
            },
            filters: {
                all: 'Semua',
                landing: 'Landing Page',
                system: 'Sistem Web',
                apps: 'Aplikasi',
                project: 'Projek'
            },
            footer: {
                tagline: 'Pembangunan web profesional untuk pertumbuhan perniagaan',
                location: 'Berpusat di Batu Pahat, Johor | Melayani pelanggan seluruh negara'
            },
            testimonials: {
                title: 'Kisah Kejayaan Pelanggan',
                subtitle: 'Apa kata pemilik perniagaan mengenai kerjasama dengan saya',
                q1: '"Sistem yang Aniq bina mengubah sepenuhnya cara kami mengurus logistik. Ia pantas, boleh dipercayai, dan tepat seperti yang kami perlukan. Sangat disyorkan!"',
                a1: { name: 'Azman Zulkifli', role: 'Pengurus Operasi, Logistik Maju' },
                q2: '"Penghantaran profesional dan komunikasi yang sangat baik. Beliau memahami visi jenama kami dan menyediakan landing page yang menarik pelanggan."',
                a2: { name: 'Sarah Lee', role: 'Pengasas, Glow Beauty' },
                q3: '"Penyelenggaraan teknikal yang terbaik. Setiap kali ada isu, ia diselesaikan dalam masa beberapa jam. Rakan teknikal yang sebenar."',
                a3: { name: 'David Khoo', role: 'Pengarah, TechStart Solutions' }
            },
            faq: {
                title: 'Soalan Lazim',
                subtitle: 'Soalan biasa mengenai perkhidmatan saya',
                q1: 'Berapa lama masa diambil untuk membina laman web?',
                a1: 'Untuk Landing Page standard, ia mengambil masa 3-5 hari. Untuk Laman Web Korporat (sehingga 10 halaman), kira-kira 2-3 minggu. Sistem kompleks bergantung kepada keperluan.',
                q2: 'Adakah anda menyediakan hosting dan domain?',
                a2: 'Ya, semua pakej saya termasuk domain PERCUMA (.com/.my) dan hosting berkelajuan tinggi untuk tahun pertama. Saya uruskan semua persediaan teknikal.',
                q3: 'Adakah terdapat yuran penyelenggaraan?',
                a3: 'Tahun pertama penyelenggaraan adalah percuma. Selepas tahun 1, terdapat yuran pembaharuan (Domain + Hosting + Penyelenggaraan) bermula dari RM350/tahun bergantung kepada pakej.',
                q4: 'Bolehkah saya mengemaskini kandungan laman web sendiri?',
                a4: 'Ya! Saya membina laman web menggunakan platform CMS yang mesra pengguna. Saya sediakan video tutorial tentang cara mengedit teks dan gambar dengan mudah.'
            }
        }
    };

    const langBtn = document.getElementById('lang-toggle');
    const langText = langBtn ? langBtn.querySelector('.lang-text') : null;
    let currentLang = localStorage.getItem('site_lang') || 'en';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('site_lang', lang);

        // Update HTML lang attribute
        document.documentElement.lang = lang;

        // Update toggle button text
        if (langText) {
            langText.textContent = lang === 'en' ? 'EN' : 'MS';
        }

        // Update text content
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const keys = key.split('.');
            let value = translations[lang];

            for (const k of keys) {
                if (value && value[k]) {
                    value = value[k];
                } else {
                    value = null; // Key not found
                    break;
                }
            }

            if (value) {
                element.textContent = value;
            }
        });
    }

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const newLang = currentLang === 'en' ? 'ms' : 'en';
            setLanguage(newLang);
        });
    }

    // Initialize Language
    setLanguage(currentLang);


    // Mobile Navigation Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            this.setAttribute('aria-expanded', navMenu.classList.contains('active'));

            // Toggle icon
            const icon = this.querySelector('i');
            if (icon) {
                if (navMenu.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenuBtn.querySelector('i').classList.remove('fa-times');
                mobileMenuBtn.querySelector('i').classList.add('fa-bars');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Portfolio Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (filterButtons.length && portfolioItems.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function () {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));

                // Add active class to clicked button
                this.classList.add('active');

                const filterValue = this.getAttribute('data-filter');

                // Filter portfolio items
                portfolioItems.forEach(item => {
                    const category = item.getAttribute('data-category');

                    // Clear existing timeout to prevent race conditions
                    if (item.dataset.timeoutId) {
                        clearTimeout(parseInt(item.dataset.timeoutId));
                        delete item.dataset.timeoutId;
                    }

                    if (filterValue === 'all' || category === filterValue) {
                        item.style.display = 'block';
                        // Small delay to ensure display:block applies before transition
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';

                        // Wait for transition to complete before hiding
                        const timeoutId = setTimeout(() => {
                            item.style.display = 'none';
                        }, 300); // 250ms transition + buffer

                        item.dataset.timeoutId = timeoutId;
                    }
                });
            });
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Calculate header height offset
                const headerHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update current year in footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Add scroll effect to navbar
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    if (navbar) {
        window.addEventListener('scroll', function () {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > 100) {
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                navbar.style.padding = '0.75rem 0';
            } else {
                navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
                navbar.style.padding = '1rem 0';
            }

            lastScrollTop = scrollTop;
        });
    }

    // Lazy loading for future image implementation
    const lazyLoadImages = () => {
        const imagePlaceholders = document.querySelectorAll('.image-placeholder, .avatar-placeholder');

        imagePlaceholders.forEach(placeholder => {
            // In production, replace placeholders with actual images
            // Example: placeholder.innerHTML = '<img src="path/to/image.jpg" alt="...">';
        });
    };

    // Initialize lazy loading
    lazyLoadImages();

    // Form validation for future contact form
    const setupFormValidation = () => {
        const contactForm = document.querySelector('form');

        if (contactForm) {
            contactForm.addEventListener('submit', function (e) {
                e.preventDefault();
                // Form validation logic here
                console.log('Form submitted - add your backend integration');
            });
        }
    };

    // Initialize form validation
    setupFormValidation();

    // Initialize scroll animations
    const initAnimations = () => {
        // Register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Hero Animation (On Load)
        const heroTl = gsap.timeline();
        heroTl.from('.hero-title', {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        })
            .from('.hero-subtitle', {
                y: 30,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            }, '-=0.6')
            .from('.hero-actions .btn, .hero-actions .btn-link', {
                y: 20,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'back.out(1.7)'
            }, '-=0.6');

        // General Section Headers
        gsap.utils.toArray('.section-header').forEach(header => {
            gsap.from(header, {
                scrollTrigger: {
                    trigger: header,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });
        });

        // Service Cards (Staggered)
        gsap.from('.service-card', {
            scrollTrigger: {
                trigger: '.services-grid',
                start: 'top 80%'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
        });

        // Process Steps (Staggered)
        gsap.from('.process-step', {
            scrollTrigger: {
                trigger: '.process-steps',
                start: 'top 75%'
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out'
        });

        // Pricing Cards
        gsap.from('.pricing-card', {
            scrollTrigger: {
                trigger: '.pricing-grid',
                start: 'top 80%'
            },
            y: 60,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out'
        });

        // Portfolio Grid
        gsap.from('.portfolio-item', {
            scrollTrigger: {
                trigger: '.portfolio-grid',
                start: 'top 85%'
            },
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out'
        });

        // About Section
        gsap.from('.about-image', {
            scrollTrigger: {
                trigger: '.about-grid',
                start: 'top 75%'
            },
            x: -50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });

        gsap.from('.about-content', {
            scrollTrigger: {
                trigger: '.about-grid',
                start: 'top 75%'
            },
            x: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    };

    // Wait for DOM content to be loaded
    initAnimations();
});
/* ===== LIGHTBOX GALLERY FUNCTIONALITY ===== */
let currentSlideIndex = 0;
const galleryImages = {
    'logistik': [
        'LOGISTIK/1.png',
        'LOGISTIK/2.png',
        'LOGISTIK/3.png',
        'LOGISTIK/4.png',
        'LOGISTIK/5.png',
        'LOGISTIK/6.png'
    ]
};
let currentGallery = [];

function openGallery(galleryId) {
    if (galleryImages[galleryId]) {
        currentGallery = galleryImages[galleryId];
        currentSlideIndex = 0;
        showSlide(currentSlideIndex);
        document.getElementById('lightbox-modal').style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
}

function closeGallery() {
    document.getElementById('lightbox-modal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Close lightbox when clicking the X
document.querySelector('.lightbox-close').addEventListener('click', closeGallery);

// Close lightbox when clicking outside the image
document.addEventListener('click', function (event) {
    const modal = document.getElementById('lightbox-modal');
    if (event.target === modal) {
        closeGallery();
    }
});

// Navigate slides
function changeSlide(n) {
    showSlide(currentSlideIndex += n);
}

function showSlide(n) {
    const imgElement = document.querySelector('.lightbox-image');
    const captionText = document.querySelector('.lightbox-caption');

    if (n >= currentGallery.length) {
        currentSlideIndex = 0;
    }
    if (n < 0) {
        currentSlideIndex = currentGallery.length - 1;
    }

    imgElement.src = currentGallery[currentSlideIndex];
    captionText.innerHTML = 'Image ' + (currentSlideIndex + 1) + ' / ' + currentGallery.length;
}

// Keyboard navigation
document.addEventListener('keydown', function (event) {
    if (document.getElementById('lightbox-modal').style.display === 'block') {
        if (event.key === 'ArrowLeft') {
            changeSlide(-1);
        } else if (event.key === 'ArrowRight') {
            changeSlide(1);
        } else if (event.key === 'Escape') {
            closeGallery();
        }
    }
});

/* ===== SCROLL ANIMATION OBSERVER ===== */
document.addEventListener('DOMContentLoaded', function () {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
});

/* ===== TYPEWRITER EFFECT ===== */
document.addEventListener('DOMContentLoaded', () => {
    const subtitle = document.querySelector('.hero-subtitle');
    if (subtitle) {
        // Store original text
        const text = subtitle.innerText.trim();
        subtitle.innerHTML = ''; // Clear content
        subtitle.classList.add('typewriter'); // Add cursor

        let i = 0;
        const speed = 30; // ms per char

        function type() {
            if (i < text.length) {
                subtitle.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                // Keep cursor blinking or remove? Keep for effect.
                // subtitle.classList.remove('typewriter');
            }
        }

        // Small delay before starting
        setTimeout(type, 500);
    }
});

/* ===== FAQ ACCORDION ===== */
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;

        // Close others
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active');
                item.querySelector('.faq-answer').style.maxHeight = null;
            }
        });

        // Toggle current
        faqItem.classList.toggle('active');
        const answer = faqItem.querySelector('.faq-answer');
        if (faqItem.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            answer.style.maxHeight = null;
        }
    });
});

/* ===== BACK TO TOP ===== */
const backToTopBtn = document.querySelector('.back-to-top');

if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* ===== CUSTOM CURSOR ===== */
// Only activate on desktop
if (window.matchMedia('(pointer: fine)').matches) {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    if (cursorDot && cursorOutline) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            // Dot follows instantly
            cursorDot.style.left = posX + 'px';
            cursorDot.style.top = posY + 'px';

            // Outline follows with delay
            cursorOutline.animate({
                left: posX + 'px',
                top: posY + 'px'
            }, { duration: 500, fill: 'forwards' });
        });

        // Hover effect for links and buttons
        const interactiveElements = document.querySelectorAll('a, button, .faq-question, .service-card, .pricing-card, .portfolio-item');

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorOutline.classList.add('cursor-hover');
            });
            el.addEventListener('mouseleave', () => {
                cursorOutline.classList.remove('cursor-hover');
            });
        });
    }
}

/* ===== TRANSLATION UPDATES (APPENDED) ===== */
/* This is a temporary fix script to inject new translations into the existing object on load
   since we cannot easily edit the large JSON block in main.js with regex reliability.
   Ideally, we should parse and extend, but for this context, extending via JS logic is safer. */

// We will manually extend the translations object in the existing DOMContentLoaded scope if possible.
// However, since we are outside the scope, we can't access 'translations' variable directly if it's not global.
// Checking main.js, 'translations' is inside DOMContentLoaded.
// Strategy: We will REPLACE the entire translations block or use specific target replacement.


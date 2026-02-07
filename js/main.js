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
                title: 'Let\'s Build Your Digital Success with JomBina',
                subtitle: 'Partner with JomBina to build high-conversion websites and scalable internal systems. Production-ready solutions, not prototypes.',
                cta_primary: 'Start Building with JomBina',
                cta_secondary: 'See portfolio of work',
                tech_stack: 'Powering solutions with modern technology:'
            },
            benefits: {
                title: 'Why Choose JomBina?',
                subtitle: 'We focus on Speed, ROI, and Support',
                card1: {
                    title: 'Fast Delivery',
                    desc: 'Ready in 7-14 working days. No technical jargon headaches. We handle hosting, domain, and full technical setup.'
                },
                card2: {
                    title: 'High-Converting Design',
                    desc: 'We use sales psychology structure (AIDA) in every design. Every button and layout is capable of driving action.'
                },
                card3: {
                    title: 'Reliable Support',
                    desc: 'Free 1-year technical maintenance. Have an issue? We resolve it within 24 hours. You focus on business, we handle the tech.'
                }
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
            portfolio: {
                title: 'Selected Work',
                subtitle: 'Examples of business-focused digital solutions'
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
            seo: {
                title: 'JomBina.site - Malaysia\'s Preferred Digital Partner',
                desc: 'We offer <strong>professional website building services</strong> and system development for entrepreneurs across Malaysia. Whether you are in <strong>Kuala Lumpur, Selangor, Johor Bahru, Batu Pahat, Penang, or Sabah & Sarawak</strong>, our team is ready to help you digitize your business.',
                services: {
                    intro: 'Our services include:',
                    landing: 'Sales Landing Page',
                    corporate: 'SME Corporate Website',
                    ecommerce: 'Online Store System (E-Commerce)',
                    db: 'Database Management System',
                    custom: 'Custom Web Design'
                }
            },
            seo: {
                title: 'JomBina.site - Malaysia\'s Preferred Digital Partner',
                desc: 'We offer <strong>professional website building services</strong> and system development for entrepreneurs across Malaysia. Whether you are in <strong>Kuala Lumpur, Selangor, Johor Bahru, Batu Pahat, Penang, or Sabah & Sarawak</strong>, our team is ready to help you digitize your business.',
                services: {
                    intro: 'Our services include:',
                    landing: 'Sales Landing Page',
                    corporate: 'SME Corporate Website',
                    ecommerce: 'Online Store System (E-Commerce)',
                    db: 'Database Management System',
                    custom: 'Custom Web Design'
                }
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
            },
            blog: {
                title: 'Blog & Insights',
                subtitle: 'Tips, tutorials, and insights about web development',
                readMore: 'Read More',
                article1: {
                    title: '5 Reasons Why Your Business Needs a Website',
                    excerpt: 'In this digital era, a website is no longer an option but a necessity. Learn why your business needs a website to stay relevant...'
                },
                article2: {
                    title: 'Landing Page vs Website: Which One is Right?',
                    excerpt: 'Many are confused between landing pages and websites. This article will help you choose the best for your business...'
                },
                article3: {
                    title: 'How Much Does a Website Cost in Malaysia? (2026)',
                    excerpt: 'A complete guide on website development costs in Malaysia. From landing pages to e-commerce, know the budget needed...'
                }
            },

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
                title: 'Bina Website & Sistem Yang <strong>Menjana Jualan</strong>',
                subtitle: 'Bukan sekadar website cantik. Kami bina aset digital yang menukar pelawat menjadi pelanggan dan mengautomasikan bisnes anda.',
                cta_primary: 'Jom Bina Sekarang',
                cta_secondary: 'Lihat portfolio kerja',
                tech_stack: 'Memperkasakan solusi dengan teknologi moden:'
            },
            benefits: {
                title: 'Kenapa Pilih JomBina?',
                subtitle: 'Fokus kami pada Kepantasan, ROI, dan Sokongan',
                card1: {
                    title: 'Siap Pantas',
                    desc: 'Siap dalam masa 7-14 hari bekerja. Tiada jargon teknikal yang pening. Kami uruskan hosting, domain, dan setup teknikal sepenuhnya.'
                },
                card2: {
                    title: 'Design Yang Menjual',
                    desc: 'Kami guna struktur psikologi jualan (AIDA) dalam setiap design. Setiap butang dan susun atur direka untuk memaksa pelawat bertindak.'
                },
                card3: {
                    title: 'Tech Support Padu',
                    desc: 'Percuma penyelenggaraan teknikal 1 tahun. Ada masalah? Kami selesaikan dalam 24 jam. Anda fokus bisnes, kami jaga website.'
                }
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
            portfolio: {
                title: 'Pilihan Karya',
                subtitle: 'Contoh penyelesaian digital berfokuskan perniagaan'
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
            seo: {
                title: 'JomBina.site - Rakan Digital Pilihan Malaysia',
                desc: 'Kami menawarkan <strong>servis bina website profesional</strong> dan pembangunan sistem untuk usahawan di seluruh Malaysia. Sama ada anda berada di <strong>Kuala Lumpur, Selangor, Johor Bahru, Batu Pahat, Pulau Pinang, atau Sabah & Sarawak</strong>, pasukan kami sedia membantu anda mendigitalkan perniagaan.',
                services: {
                    intro: 'Perkhidmatan kami termasuk:',
                    landing: 'Landing Page Jualan',
                    corporate: 'Website Korporat SME',
                    ecommerce: 'Sistem Kedai Online (E-Commerce)',
                    db: 'Sistem Pengurusan Database',
                    custom: 'Web Design Custom'
                }
            },
            seo: {
                title: 'JomBina.site - Rakan Digital Pilihan Malaysia',
                desc: 'Kami menawarkan <strong>servis bina website profesional</strong> dan pembangunan sistem untuk usahawan di seluruh Malaysia. Sama ada anda berada di <strong>Kuala Lumpur, Selangor, Johor Bahru, Batu Pahat, Pulau Pinang, atau Sabah & Sarawak</strong>, pasukan kami sedia membantu anda mendigitalkan perniagaan.',
                services: {
                    intro: 'Perkhidmatan kami termasuk:',
                    landing: 'Landing Page Jualan',
                    corporate: 'Website Korporat SME',
                    ecommerce: 'Sistem Kedai Online (E-Commerce)',
                    db: 'Sistem Pengurusan Database',
                    custom: 'Web Design Custom'
                }
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
            },
            blog: {
                title: 'Blog & Insights',
                subtitle: 'Tips, tutorial, dan insight tentang pembangunan web',
                readMore: 'Baca Lagi',
                article1: {
                    title: '5 Sebab Kenapa Bisnes Anda Perlu Website',
                    excerpt: 'Dalam era digital ini, website bukan lagi pilihan tetapi keperluan. Ketahui kenapa bisnes anda perlu website untuk terus relevan...'
                },
                article2: {
                    title: 'Landing Page vs Website: Mana Satu Yang Sesuai?',
                    excerpt: 'Ramai yang keliru antara landing page dan website. Artikel ini akan membantu anda memilih yang terbaik untuk bisnes anda...'
                },
                article3: {
                    title: 'Berapa Kos Buat Website di Malaysia? (2026)',
                    excerpt: 'Panduan lengkap tentang kos membuat website di Malaysia. Dari landing page hingga e-commerce, ketahui budget yang diperlukan...'
                }
            },

        }
    };

    // --- LANGUAGE SWITCHER ---
    // Use classes to support multiple buttons (mobile & desktop)
    const langBtns = document.querySelectorAll('.lang-btn, #lang-toggle');
    let currentLang = localStorage.getItem('site_lang') || 'ms'; // Default to Malay

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('site_lang', lang);

        // Update HTML lang attribute
        document.documentElement.lang = lang;

        // Update ALL toggle button texts
        document.querySelectorAll('.lang-text').forEach(el => {
            el.textContent = lang === 'en' ? 'EN' : 'MS';
        });

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
                // Check if value contains HTML tags
                if (value.includes('<')) {
                    element.innerHTML = value;
                } else {
                    element.textContent = value;
                }
            }
        });
    }

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const newLang = currentLang === 'en' ? 'ms' : 'en';
            setLanguage(newLang);
        });
    });

    // Initialize Language
    setLanguage(currentLang);

    // --- THEME SWITCHER ---
    const themeBtns = document.querySelectorAll('.theme-btn, #theme-toggle');

    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('site_theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    let currentTheme = savedTheme || systemTheme;

    function setTheme(theme) {
        currentTheme = theme;
        localStorage.setItem('site_theme', theme);

        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            document.body.classList.add('dark-mode');

            // Update ALL theme icons
            document.querySelectorAll('.theme-btn i, #theme-toggle i').forEach(icon => {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            });
        } else {
            document.documentElement.classList.remove('dark');
            document.body.classList.remove('dark-mode');

            // Update ALL theme icons
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

    // Initialize Theme
    setTheme(currentTheme);


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
    let scrollTicking = false;

    if (navbar) {
        window.addEventListener('scroll', function () {
            if (!scrollTicking) {
                window.requestAnimationFrame(function () {
                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

                    if (scrollTop > 100) {
                        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                        navbar.style.padding = '0.75rem 0';
                    } else {
                        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
                        navbar.style.padding = '1rem 0';
                    }

                    lastScrollTop = scrollTop;
                    scrollTicking = false;
                });
                scrollTicking = true;
            }
        }, { passive: true });
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
                trigger: '.process-timeline',
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
    // initAnimations();
});
/* ===== LIGHTBOX GALLERY FUNCTIONALITY ===== */
let currentSlideIndex = 0;
const galleryImages = {
    'logistik': [
        'assets/img/LOGISTIK/1.png',
        'assets/img/LOGISTIK/2.png',
        'assets/img/LOGISTIK/3.png',
        'assets/img/LOGISTIK/4.png',
        'assets/img/LOGISTIK/5.png',
        'assets/img/LOGISTIK/6.png'
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

    const lang = localStorage.getItem('site_lang') || 'ms';
    const imageText = lang === 'en' ? 'Image' : 'Imej';

    captionText.innerHTML = `${imageText} ${currentSlideIndex + 1} / ${currentGallery.length}`;
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

    /*
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
    */

    // === SKELETON IMAGE LOADER ===
    const skeletonImages = document.querySelectorAll('.portfolio-image img, .blog-image img');
    skeletonImages.forEach(img => {
        // If already loaded (cached)
        if (img.complete) {
            img.classList.add('loaded');
            img.parentElement.classList.add('image-loaded');
        } else {
            img.addEventListener('load', function () {
                img.classList.add('loaded');
                img.parentElement.classList.add('image-loaded');
            });
        }
    });
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
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}


/* ===== HERO BACKGROUND ANIMATION (CYBERPUNK DATA RAIN) ===== */
const canvas = document.getElementById('hero-background');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let width, height;

    // Config
    const fontSize = 16;
    let columns = 0;
    const drops = []; // y-position of drops

    // Charset: Katakana + Latin + Numbers
    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const charset = katakana + latin + nums;

    function initRain() {
        width = canvas.width;
        height = canvas.height;
        columns = Math.floor(width / fontSize);

        drops.length = 0;
        for (let i = 0; i < columns; i++) {
            // Random start Y to avoid "wall of text" effect at start
            drops[i] = Math.random() * -(height / fontSize);
        }
    }

    function resizeCanvas() {
        const hero = document.querySelector('.hero');
        if (hero) {
            canvas.width = hero.offsetWidth;
            canvas.height = hero.offsetHeight;
            initRain();
        }
    }

    function animateRain() {
        // Trail Effect: slightly transparent black repaint
        // Varies by theme
        const isDark = document.documentElement.classList.contains('dark');

        if (isDark) {
            ctx.fillStyle = 'rgba(15, 23, 42, 0.1)'; // Dark Slate with trail
            ctx.shadowColor = '#38bdf8'; // Cyan Glow
        } else {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'; // White with trail
            ctx.shadowColor = '#0f172a'; // Dark Slate Glow
        }

        ctx.fillRect(0, 0, width, height);

        // Text Style
        ctx.font = 'bold ' + fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            // Random Character
            const text = charset.charAt(Math.floor(Math.random() * charset.length));

            // X position: column index * font size
            const x = i * fontSize;
            // Y position: drop value * font size
            const y = drops[i] * fontSize;

            // Color Logic
            // Randomly make some characters "bright" / "white" for glitch effect
            const isBright = Math.random() > 0.95;

            if (isDark) {
                if (isBright) {
                    ctx.fillStyle = '#ffffff'; // Flash white
                    ctx.shadowBlur = 15;
                } else {
                    ctx.fillStyle = '#0EA5E9'; // Sky 500 (Cyan-ish)
                    ctx.shadowBlur = 2; // Subtle glow
                }
            } else {
                if (isBright) {
                    ctx.fillStyle = '#38bdf8'; // Flash Cyan in light mode
                    ctx.shadowBlur = 5;
                } else {
                    ctx.fillStyle = '#334155'; // Slate 700
                    ctx.shadowBlur = 0;
                }
            }

            ctx.fillText(text, x, y);

            // Reset drop to top randomly after it has crossed screen
            // Adding randomness to the reset to keeps drops scattered
            if (y > height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            // Increment Y
            drops[i]++;
        }

        requestAnimationFrame(animateRain);
    }

    // Mouse Interaction: "Cyber Glitch"
    // When mouse moves, randomize drops near cursor to create "disturbance"
    document.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const col = Math.floor(mouseX / fontSize);

        // Glitch nearby columns
        const range = 2;
        for (let i = col - range; i <= col + range; i++) {
            if (i >= 0 && i < drops.length) {
                // Randomly reset or speed up
                if (Math.random() > 0.5) {
                    // "Magnetic disruption" - push text down instantly
                    drops[i] += 2;
                }
            }
        }
    });

    // Init
    window.addEventListener('resize', resizeCanvas);
    setTimeout(() => {
        resizeCanvas();
        requestAnimationFrame(animateRain);
    }, 100);

    // OPTIMIZATION
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        const observer = new IntersectionObserver((entries) => {
            // Pause logic could go here
        }, { threshold: 0.1 });
        observer.observe(heroSection);
    }
}


/* ===== PRELOADER ===== */
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        // Small delay for smoother experience
        setTimeout(() => {
            preloader.classList.add('hidden');
            // Remove from DOM after transition
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 800);
    }
});

/* ===== LIVE CHAT WIDGET ===== */
(function () {
    // FAQ Knowledge Base
    const faqResponses = [
        {
            keywords: ['harga', 'price', 'cost', 'berapa', 'rm', 'budget', 'pakej', 'package'],
            response: `Berikut adalah harga pakej kami:

• <strong>Landing Page:</strong> RM490 - RM890
• <strong>Business Website:</strong> Dari RM990
• <strong>E-Commerce:</strong> Dari RM1,890

Semua pakej termasuk domain, hosting & maintenance 1 tahun!`
        },
        {
            keywords: ['lama', 'long', 'timeline', 'duration', 'masa', 'siap', 'ready', 'bila'],
            response: `Timeline projek bergantung kepada jenis:

• <strong>Landing Page:</strong> 3-5 hari bekerja
• <strong>Business Website:</strong> 2-3 minggu
• <strong>E-Commerce/Sistem:</strong> 3-4 minggu

Kami akan bagi timeline tepat selepas perbincangan requirement!`
        },
        {
            keywords: ['services', 'perkhidmatan', 'servis', 'apa', 'what', 'buat', 'offer'],
            response: `📋 Kami menawarkan:

• Landing Page Development
• Corporate/Business Website
• E-Commerce (WooCommerce/Shopify)
• Custom Web System & SaaS
• Website Redesign & Optimization

Tiap projek termasuk copywriting & design!`
        },
        {
            keywords: ['portfolio', 'work', 'contoh', 'example', 'sample', 'kerja', 'projek'],
            response: `Jom tengok portfolio kami!

Kami dah bina 100+ landing pages dan 20+ sistem untuk pelbagai industri.

<a href="#work" class="chat-scroll-link" onclick="document.getElementById('work').scrollIntoView({behavior:'smooth'});return false;">👉 Lihat Portfolio</a>`
        },
        {
            keywords: ['bayar', 'payment', 'deposit', 'cara', 'installment', 'method'],
            response: `💳 Cara pembayaran:

• <strong>Deposit:</strong> 50% sebelum mula kerja
• <strong>Baki:</strong> 50% selepas projek siap
• <strong>Kaedah:</strong> Bank Transfer / Online Banking

Boleh bayar secara installment untuk projek besar!`
        },
        {
            keywords: ['hosting', 'domain', 'maintain', 'maintenance', 'server', 'renew'],
            response: `🌐 Tentang hosting & domain:

• <strong>Tahun 1:</strong> FREE (termasuk dalam pakej)
• <strong>Selepas tahun 1:</strong> Dari RM350/tahun

Kami uruskan semua maintenance & security update!`
        },
        {
            keywords: ['contact', 'hubungi', 'whatsapp', 'call', 'email', 'reach'],
            response: `Jom berhubung!

Cara paling cepat adalah melalui WhatsApp. Kami akan respond dalam 24 jam.

<a href="https://wa.me/601124187824?text=Hi,%20saya%20berminat%20dengan%20servis%20JomBina" target="_blank" class="chat-whatsapp-link"><i class="fab fa-whatsapp"></i> Chat di WhatsApp</a>`
        },
        {
            keywords: ['hi', 'hello', 'hai', 'helo', 'hey', 'assalam', 'salam'],
            response: `Hai! Selamat datang ke JomBina!

Saya assistant virtual yang boleh bantu jawab soalan anda tentang servis website kami.

Apa yang anda nak tahu? 😊`
        }
    ];

    // Default fallback response
    const fallbackResponse = `🤔 Maaf, saya kurang pasti jawapan untuk soalan ini.

Jom bincang terus dengan team kami untuk info lebih lanjut!

<a href="https://wa.me/601124187824?text=Hi,%20saya%20ada%20soalan%20tentang%20servis%20JomBina" target="_blank" class="chat-whatsapp-link"><i class="fab fa-whatsapp"></i> Chat di WhatsApp</a>`;

    // Welcome message
    const welcomeMessage = `Hai! Saya JomBina Assistant.

Saya boleh bantu jawab soalan tentang:
• Harga pakej website
• Timeline projek
• Services yang kami tawarkan
• Portfolio kerja

Cuba klik butang di bawah atau taip soalan anda!`;

    // DOM Elements
    const chatToggle = document.getElementById('chat-toggle');
    const chatWindow = document.getElementById('chat-window');
    const chatClose = document.getElementById('chat-close');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    const chatBadge = document.getElementById('chat-badge');
    const chatIcon = document.getElementById('chat-icon');
    const quickReplyBtns = document.querySelectorAll('.quick-reply-btn');

    let isOpen = false;
    let hasShownWelcome = false;

    // Toggle chat window
    function toggleChat() {
        isOpen = !isOpen;
        chatWindow.classList.toggle('active', isOpen);

        // Change icon
        if (isOpen) {
            chatIcon.classList.remove('fa-comments');
            chatIcon.classList.add('fa-times');
            chatBadge.classList.add('hidden');

            // Show welcome message on first open
            if (!hasShownWelcome) {
                addBotMessage(welcomeMessage);
                hasShownWelcome = true;
            }

            // Focus input
            setTimeout(() => chatInput.focus(), 300);
        } else {
            chatIcon.classList.remove('fa-times');
            chatIcon.classList.add('fa-comments');
        }
    }

    // Add bot message
    function addBotMessage(text) {
        const msg = document.createElement('div');
        msg.className = 'chat-message bot';
        msg.innerHTML = text;
        chatMessages.appendChild(msg);
        scrollToBottom();
    }

    // Add user message
    function addUserMessage(text) {
        const msg = document.createElement('div');
        msg.className = 'chat-message user';
        msg.textContent = text;
        chatMessages.appendChild(msg);
        scrollToBottom();
    }

    // Show typing indicator
    function showTyping() {
        const typing = document.createElement('div');
        typing.className = 'typing-indicator';
        typing.id = 'typing-indicator';
        typing.innerHTML = '<span></span><span></span><span></span>';
        chatMessages.appendChild(typing);
        scrollToBottom();
    }

    // Hide typing indicator
    function hideTyping() {
        const typing = document.getElementById('typing-indicator');
        if (typing) typing.remove();
    }

    // Scroll to bottom
    function scrollToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Find matching response
    function findResponse(query) {
        const lowerQuery = query.toLowerCase();

        for (const faq of faqResponses) {
            for (const keyword of faq.keywords) {
                if (lowerQuery.includes(keyword)) {
                    return faq.response;
                }
            }
        }

        return fallbackResponse;
    }

    // Handle send message
    function sendMessage(text) {
        if (!text || !text.trim()) return;

        // Add user message
        addUserMessage(text.trim());

        // Clear input
        chatInput.value = '';

        // Show typing indicator
        showTyping();

        // Simulate typing delay (500-1500ms)
        const delay = 500 + Math.random() * 1000;

        setTimeout(() => {
            hideTyping();
            const response = findResponse(text);
            addBotMessage(response);
        }, delay);
    }

    // Event Listeners
    if (chatToggle) {
        chatToggle.addEventListener('click', toggleChat);
    }

    if (chatClose) {
        chatClose.addEventListener('click', toggleChat);
    }

    if (chatSend) {
        chatSend.addEventListener('click', () => {
            sendMessage(chatInput.value);
        });
    }

    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage(chatInput.value);
            }
        });
    }

    // Quick reply buttons
    quickReplyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const message = btn.getAttribute('data-message');
            sendMessage(message);
        });
    });

    // Close on outside click (optional)
    document.addEventListener('click', (e) => {
        if (isOpen && !chatWindow.contains(e.target) && !chatToggle.contains(e.target)) {
            // Uncomment below to enable close on outside click
            // toggleChat();
        }
    });
})();

/* ===== BLOG MODAL SYSTEM ===== */
(function () {
    // Blog Data
    const blogArticles = {
        'bisnes-perlu-website': {
            category: 'Business Strategy',
            title: '5 Sebab Kenapa Bisnes Anda Perlu Website',
            date: 'Jan 2026',
            readTime: '5 min read',
            body: `
                <p>Dalam era digital yang pesat ini, memiliki website bukan lagi satu kemewahan, tetapi satu keperluan kritikal untuk mana-mana perniagaan yang ingin kekal relevan dan bersaing. Berikut adalah 5 sebab utama:</p>
                
                <h4>1. Kredibiliti & Profesionalisme</h4>
                <p>Pelanggan hari ini akan "Google" dahulu sebelum membeli. Jika bisnes anda tiada website, anda kehilangan *First Impression*. Website memberikan imej bahawa bisnes anda sah, stabil, dan profesional.</p>

                <h4>2. Kedai Buka 24/7 Tanpa Cuti</h4>
                <p>Kedai fizikal ada waktu operasi. Website anda bekerja untuk anda 24 jam sehari, 7 hari seminggu. Pelanggan boleh mendapatkan info produk, melihat testimoni, dan membuat tempahan walaupun anda sedang tidur.</p>

                <h4>3. Kawalan Penuh Terhadap Brand Anda</h4>
                <p>Di media sosial, anda menumpang platform orang lain. Algorithm boleh berubah, akaun boleh disekat. Di website sendiri, anda berkuasa penuh ke atas content, database pelanggan, dan cara anda menjual.</p>

                <h4>4. Pemasaran Kos Efektif (SEO)</h4>
                <p>Dengan strategi SEO yang betul, website anda boleh muncul di carian Google apabila pelanggan mencari servis anda. Ini adalah trafik percuma berbanding iklan berbayar (Ads) yang semakin mahal.</p>

                <h4>5. Pusat Pengumpulan Data Pelanggan</h4>
                <p>Website membolehkan anda memasang *Pixel* dan *Analytics*. Anda boleh tahu siapa pengunjung anda, dari mana mereka datang, dan apa yang mereka minat. Data ini sangat mahal harganya untuk strategi pemasaran akan datang.</p>

                <div class="blog-callout">
                    <p><strong>Kesimpulan:</strong> Jangan tunggu lagi. Bina aset digital anda hari ini sebelum pesaing anda mengambil alih pasaran online.</p>
                </div>
            `
        },
        'landing-vs-website': {
            category: 'Web Guide',
            title: 'Landing Page vs Website: Mana Satu Sesuai?',
            date: 'Jan 2026',
            readTime: '4 min read',
            body: `
                <p>Ramai usahawan keliru sama ada mereka perlukan Landing Page atau Website Korporat penuh. Jawapannya bergantung kepada <strong>OBJEKTIF</strong> anda.</p>

                <h4>Apa itu Landing Page?</h4>
                <p>Halaman tunggal (1 muka) yang fokus kepada SATU tindakan sahaja (CTO - Call to Action). Tiada menu navigasi yang serabut.</p>
                <ul>
                    <li><strong>Fokus:</strong> Jualan produk spesifik atau kumpul leads.</li>
                    <li><strong>Sesuai untuk:</strong> Iklan FB/TikTok, pelancaran produk baru, promosi bermusim.</li>
                    <li><strong>Kelebihan:</strong> Conversion rate lebih tinggi kerana kurang gangguan.</li>
                </ul>

                <h4>Apa itu Website Korporat?</h4>
                <p>Laman web lengkap dengan pelbagai halaman (Home, About, Services, Contact, Blog).</p>
                <ul>
                    <li><strong>Fokus:</strong> Branding, info syarikat, dan katalog servis lengkap.</li>
                    <li><strong>Sesuai untuk:</strong> Syarikat servis, kontraktor, profesional, agensi.</li>
                    <li><strong>Kelebihan:</strong> Membina autoriti jangka masa panjang dan SEO.</p>
                </ul>

                <h4>Mana Satu Pilihan Anda?</h4>
                <p>Jika anda nak buat jualan cepat menggunakan Iklan Berbayar -> Pilih <strong>Landing Page</strong>.</p>
                <p>Jika anda nak bina jenama jangka panjang dan kepercayaan -> Pilih <strong>Website Korporat</strong>.</p>
            `
        },
        'kos-buat-website': {
            category: 'Pricing Guide',
            title: 'Berapa Kos Buat Website di Malaysia? (2026)',
            date: 'Feb 2026',
            readTime: '6 min read',
            body: `
                <p>Soalan paling popular: "Berapa harga website?". Ini panduan kasar harga pasaran di Malaysia untuk tahun 2026 mengikut kualiti dan fungsi.</p>

                <h4>1. DIY (Buat Sendiri) - RM200 - RM500</h4>
                <p>Gunakan Wix, Squarespace atau hosting murah. Anda perlu beli domain dan hosting sendiri. Kos murah tapi perlukan masa dan kemahiran teknikal anda sendiri.</p>

                <h4>2. Freelancer (Bajet) - RM800 - RM2,500</h4>
                <p>Dapatkan freelancer untuk bina website. Kualiti bergantung kepada pengalaman. Pastikan ada perjanjian tentang maintenance selepas siap.</p>

                <h4>3. Agensi Profesional - RM3,000 - RM15,000+</h4>
                <p>Untuk syarikat yang perlukan sistem kustom, design premium, dan jaminan support. Sesuai untuk syarikat sederhana dan besar.</p>

                <h4>Harga Pakej JomBina.site?</h4>
                <p>Kami memposisikan diri sebagai "Premium Freelance" - Kualiti Agensi pada harga mampu milik.</p>
                <ul>
                    <li><strong>Landing Page:</strong> Bermula RM490</li>
                    <li><strong>Corporate Website:</strong> Bermula RM990</li>
                </ul>
                <p>Kenapa berbaloi? Sebab kami bagi <strong>Support & Maintenance PERCUMA</strong> untuk setahun pertama. Tiada pening kepala teknikal.</p>
            `
        }
    };

    // Elements
    const blogCards = document.querySelectorAll('.blog-card');
    const modal = document.getElementById('blog-modal');
    const modalOverlay = document.getElementById('blog-modal-overlay');
    const modalClose = document.getElementById('blog-modal-close');

    // Modal Content Elements
    const mCategory = document.getElementById('blog-article-category');
    const mTitle = document.getElementById('blog-article-title');
    const mDate = document.getElementById('blog-article-date');
    const mTime = document.getElementById('blog-article-read-time');
    const mBody = document.getElementById('blog-article-body');

    // Open Modal Function
    function openModal(articleId) {
        const data = blogArticles[articleId];
        if (!data) return;

        // Populate Data
        mCategory.textContent = data.category;
        mTitle.textContent = data.title;
        mDate.textContent = data.date;
        mTime.textContent = data.readTime;
        mBody.innerHTML = data.body;

        // Show Modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    // Close Modal Function
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scrolling
    }

    // Event Listeners
    if (blogCards.length > 0) {
        blogCards.forEach(card => {
            card.addEventListener('click', function () {
                const articleId = this.getAttribute('data-article');
                openModal(articleId);
            });
        });
    }

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

    // Close on Escape key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

})();

/* ===== CASE STUDY MODAL ===== */
(function () {
    // Case study data
    const caseStudies = {
        'buku-panduan-sihat': {
            title: { ms: 'Buku Panduan Sihat', en: 'Buku Panduan Sihat' },
            category: 'Landing Page',
            client: 'Health & Wellness',
            heroImage: 'bukupanduansihat.webp',
            overview: {
                ms: 'Landing page yang menarik untuk eBook panduan kesihatan. Direka untuk menarik pembeli dengan copywriting yang meyakinkan dan visual yang profesional.',
                en: 'Attractive landing page for health guide eBook. Designed to attract buyers with convincing copywriting and professional visuals.'
            },
            challenge: {
                ms: 'Klien perlukan landing page yang mampu convert visitors kepada pembeli dalam masa singkat dengan trust elements yang kuat.',
                en: 'Client needed a landing page capable of converting visitors to buyers in a short time with strong trust elements.'
            },
            solution: {
                ms: 'Menggunakan struktur AIDA (Attention, Interest, Desire, Action) dengan testimonial, countdown timer, dan CTA yang jelas.',
                en: 'Using AIDA structure (Attention, Interest, Desire, Action) with testimonials, countdown timer, and clear CTA.'
            },
            results: {
                ms: 'Landing page berjaya meningkatkan conversion rate dan memudahkan proses jualan melalui WhatsApp.',
                en: 'Landing page successfully increased conversion rate and simplified sales process via WhatsApp.'
            },
            techStack: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
            gallery: [],
            liveUrl: 'https://bosta.com.my/bukupanduansihat/'
        },
        'probiozen': {
            title: { ms: 'Probiozen', en: 'Probiozen' },
            category: 'Landing Page',
            client: 'Health Supplement',
            heroImage: 'probiozen.webp',
            overview: {
                ms: 'High-converting landing page untuk suplemen probiotik yang mensasarkan pengguna yang prihatin tentang kesihatan usus.',
                en: 'High-converting landing page for probiotic supplements targeting gut health conscious consumers.'
            },
            challenge: {
                ms: 'Perlu menyampaikan maklumat saintifik dengan cara yang mudah difahami sambil membina kepercayaan.',
                en: 'Need to convey scientific information in an easy-to-understand way while building trust.'
            },
            solution: {
                ms: 'Design yang bersih dengan infografik, testimonial video, dan proses pembelian yang mudah.',
                en: 'Clean design with infographics, video testimonials, and easy purchase process.'
            },
            results: {
                ms: 'Peningkatan ketara dalam engagement dan conversion. Page load dalam masa kurang dari 2 saat.',
                en: 'Significant increase in engagement and conversion. Page load under 2 seconds.'
            },
            techStack: ['HTML', 'CSS', 'JavaScript', 'WhatsApp API'],
            gallery: [],
            liveUrl: 'https://bosta.com.my/probiozen/'
        },
        'formula-turun-10kg': {
            title: { ms: 'Modul Formula Turun 10 KG', en: '10KG Weight Loss Formula Module' },
            category: 'Landing Page',
            client: 'Fitness & Health',
            heroImage: 'formulaturun10kg.webp',
            overview: {
                ms: 'Landing page untuk program penurunan berat badan dengan modul pembelajaran step-by-step.',
                en: 'Landing page for weight loss program with step-by-step learning modules.'
            },
            challenge: {
                ms: 'Meyakinkan pengunjung bahawa program ini berbeza dari program diet lain yang gagal.',
                en: 'Convincing visitors that this program is different from other failed diet programs.'
            },
            solution: {
                ms: 'Showcase hasil sebenar dengan before-after photos, testimonial pengguna, dan jaminan wang dikembalikan.',
                en: 'Showcase real results with before-after photos, user testimonials, and money-back guarantee.'
            },
            results: {
                ms: 'Meningkatkan kepercayaan pengguna dan mempermudah proses enrollment.',
                en: 'Increased user trust and simplified enrollment process.'
            },
            techStack: ['HTML', 'CSS', 'JavaScript', 'Mobile-First Design'],
            gallery: [],
            liveUrl: 'https://bosta.com.my/formula-turun-10kg/'
        },
        'ells-cafe': {
            title: { ms: 'Ells Cafe', en: 'Ells Cafe' },
            category: 'Landing Page',
            client: 'Food & Beverage',
            heroImage: 'ellscafe.webp',
            overview: {
                ms: 'Landing page untuk kafe dengan menu digital dan sistem tempahan meja.',
                en: 'Landing page for cafe with digital menu and table reservation system.'
            },
            challenge: {
                ms: 'Mempamerkan suasana dan menu kafe secara menarik untuk menarik pengunjung.',
                en: 'Showcasing cafe ambience and menu attractively to draw visitors.'
            },
            solution: {
                ms: 'Gallery photos yang menarik, menu interaktif, dan integrasi dengan Google Maps untuk directions.',
                en: 'Attractive gallery photos, interactive menu, and Google Maps integration for directions.'
            },
            results: {
                ms: 'Meningkatkan visibility kafe dan memudahkan tempahan meja melalui WhatsApp.',
                en: 'Increased cafe visibility and simplified table reservations via WhatsApp.'
            },
            techStack: ['HTML', 'CSS', 'JavaScript', 'Google Maps API'],
            gallery: [],
            liveUrl: 'https://bosta.com.my/ellscafe/'
        },
        'missgolden-hair': {
            title: { ms: 'MissGolden Hair', en: 'MissGolden Hair' },
            category: 'Landing Page',
            client: 'Beauty & Cosmetics',
            heroImage: 'missgoldenhair.webp',
            overview: {
                ms: 'Landing page premium untuk produk penjagaan rambut dengan aesthetic yang mewah.',
                en: 'Premium landing page for hair care products with luxurious aesthetic.'
            },
            challenge: {
                ms: 'Menyampaikan imej premium dan kualiti tinggi produk kecantikan.',
                en: 'Conveying premium image and high quality of beauty products.'
            },
            solution: {
                ms: 'Design minimalis dengan color palette yang elegant, product showcase, dan testimonial bergambar.',
                en: 'Minimalist design with elegant color palette, product showcase, and pictorial testimonials.'
            },
            results: {
                ms: 'Berjaya mencipta imej brand yang premium dan meningkatkan perceived value produk.',
                en: 'Successfully created premium brand image and increased product perceived value.'
            },
            techStack: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
            gallery: [],
            liveUrl: 'https://missgoldenhair-eptwyw197-zaniquaffles-projects.vercel.app/'
        },
        'rawat-hormon': {
            title: { ms: 'Webinar Rawat Hormon', en: 'Hormone Treatment Webinar' },
            category: 'Landing Page',
            client: 'Health Education',
            heroImage: 'rawathotmon.webp',
            overview: {
                ms: 'Landing page untuk pendaftaran webinar kesihatan hormon dengan countdown dan limited seats.',
                en: 'Landing page for hormone health webinar registration with countdown and limited seats.'
            },
            challenge: {
                ms: 'Mencipta urgency untuk pendaftaran webinar dengan limited seats.',
                en: 'Creating urgency for webinar registration with limited seats.'
            },
            solution: {
                ms: 'Countdown timer, remaining seats indicator, dan early bird pricing untuk mencipta FOMO.',
                en: 'Countdown timer, remaining seats indicator, and early bird pricing to create FOMO.'
            },
            results: {
                ms: 'Seats penuh dalam masa singkat dengan conversion rate yang tinggi.',
                en: 'Seats filled in short time with high conversion rate.'
            },
            techStack: ['HTML', 'CSS', 'JavaScript', 'Form Integration'],
            gallery: [],
            liveUrl: 'https://bosta.com.my/RawatHormon/'
        },
        'logistik': {
            title: { ms: 'Sistem Logistik', en: 'Logistics System' },
            category: 'Web System',
            client: 'Logistics & Delivery',
            heroImage: 'LOGISTIK/1.png',
            overview: {
                ms: 'Sistem pengurusan logistik lengkap dengan tracking, inventory, dan reporting.',
                en: 'Complete logistics management system with tracking, inventory, and reporting.'
            },
            challenge: {
                ms: 'Menguruskan fleet delivery, tracking real-time, dan inventory management dalam satu platform.',
                en: 'Managing fleet delivery, real-time tracking, and inventory management in one platform.'
            },
            solution: {
                ms: 'Dashboard admin yang comprehensive, mobile-friendly driver app, dan real-time tracking system.',
                en: 'Comprehensive admin dashboard, mobile-friendly driver app, and real-time tracking system.'
            },
            results: {
                ms: 'Meningkatkan efficiency operasi dan mengurangkan masa untuk reporting.',
                en: 'Increased operational efficiency and reduced reporting time.'
            },
            techStack: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'REST API'],
            gallery: ['LOGISTIK/1.png', 'LOGISTIK/2.png', 'LOGISTIK/3.png'],
            liveUrl: null
        }
    };

    // DOM Elements
    const modal = document.getElementById('case-study-modal');
    const overlay = document.getElementById('case-study-overlay');
    const closeBtn = document.getElementById('case-study-close');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    // Populate modal with data
    function populateModal(data) {
        const lang = localStorage.getItem('site_lang') || 'ms';

        document.getElementById('cs-hero-image').src = data.heroImage;
        document.getElementById('cs-title').textContent = data.title[lang] || data.title.ms;
        document.getElementById('cs-category').textContent = data.category;
        document.getElementById('cs-client').textContent = data.client;
        document.getElementById('cs-overview').textContent = data.overview[lang] || data.overview.ms;
        document.getElementById('cs-challenge').textContent = data.challenge[lang] || data.challenge.ms;
        document.getElementById('cs-solution').textContent = data.solution[lang] || data.solution.ms;
        document.getElementById('cs-results').textContent = data.results[lang] || data.results.ms;

        // Tech Stack
        const techContainer = document.getElementById('cs-tech-stack');
        techContainer.innerHTML = data.techStack.map(tech =>
            `<span class="cs-tech-badge">${tech}</span>`
        ).join('');

        // Gallery
        const gallerySection = document.getElementById('cs-gallery-section');
        const galleryContainer = document.getElementById('cs-gallery');

        if (data.gallery && data.gallery.length > 0) {
            gallerySection.classList.add('has-gallery');
            galleryContainer.innerHTML = data.gallery.map(img =>
                `<img src="${img}" alt="Gallery" onclick="event.stopPropagation();">`
            ).join('');
        } else {
            gallerySection.classList.remove('has-gallery');
            galleryContainer.innerHTML = '';
        }

        // Live URL
        const liveBtn = document.getElementById('cs-live-url');
        if (data.liveUrl) {
            liveBtn.href = data.liveUrl;
            liveBtn.style.display = 'inline-flex';
        } else {
            liveBtn.style.display = 'none';
        }
    }

    // Open modal
    function openCaseStudy(projectId) {
        const data = caseStudies[projectId];
        if (!data) return;

        populateModal(data);
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Close modal
    function closeCaseStudy() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Get project ID from portfolio item
    function getProjectId(item) {
        // Get text content from link or h3
        let title = item.querySelector('.portfolio-link')?.textContent ||
            item.querySelector('h3')?.textContent || '';

        // Normalize whitespace (collapse multiple spaces/newlines into single space)
        title = title.replace(/\s+/g, ' ').trim();

        // Map titles to IDs (using partial matches)
        const titlePatterns = [
            { pattern: 'Buku', id: 'buku-panduan-sihat' },
            { pattern: 'Panduan Sihat', id: 'buku-panduan-sihat' },
            { pattern: 'Probiozen', id: 'probiozen' },
            { pattern: 'Modul Formula', id: 'formula-turun-10kg' },
            { pattern: 'Turun 10', id: 'formula-turun-10kg' },
            { pattern: 'Ells Cafe', id: 'ells-cafe' },
            { pattern: 'MissGolden', id: 'missgolden-hair' },
            { pattern: 'Webinar', id: 'rawat-hormon' },
            { pattern: 'Rawat Hormon', id: 'rawat-hormon' },
            { pattern: 'Logistik', id: 'logistik' }
        ];

        for (const { pattern, id } of titlePatterns) {
            if (title.includes(pattern)) {
                return id;
            }
        }

        return null;
    }

    // Add click handlers to portfolio items
    portfolioItems.forEach(item => {
        // Check if it's not a gallery item (logistik has its own handler)
        const hasGalleryOverlay = item.querySelector('.gallery-overlay');

        if (!hasGalleryOverlay) {
            item.style.cursor = 'pointer';
            item.addEventListener('click', (e) => {
                // Don't open if clicking external link
                if (e.target.closest('.portfolio-link')) {
                    e.preventDefault();
                }

                const projectId = getProjectId(item);
                if (projectId) {
                    openCaseStudy(projectId);
                }
            });
        } else {
            // For gallery items, add a case study button
            const info = item.querySelector('.portfolio-info');
            if (info) {
                const projectId = getProjectId(item);
                if (projectId) {
                    const csBtn = document.createElement('button');
                    csBtn.className = 'btn-case-study';
                    csBtn.innerHTML = '<i class="fas fa-info-circle"></i> Case Study';
                    csBtn.onclick = (e) => {
                        e.stopPropagation();
                        openCaseStudy(projectId);
                    };
                    info.appendChild(csBtn);
                }
            }
        }
    });

    // Close handlers
    if (closeBtn) closeBtn.addEventListener('click', closeCaseStudy);
    if (overlay) overlay.addEventListener('click', closeCaseStudy);

    // Escape key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeCaseStudy();
        }
    });
})();

/* ===== BLOG MODAL ===== */
(function () {
    // Blog articles data with bilingual content
    const blogArticles = {
        'bisnes-perlu-website': {
            category: 'Business',
            date: 'Jan 2026',
            readTime: { ms: '5 minit', en: '5 min read' },
            title: {
                ms: '5 Sebab Kenapa Bisnes Anda Perlu Website',
                en: '5 Reasons Why Your Business Needs a Website'
            },
            content: {
                ms: `
                    <p>Dalam era digital yang semakin pesat ini, memiliki website bukan lagi sekadar pilihan - ia adalah <strong>keperluan mutlak</strong> untuk setiap bisnes yang mahu kekal relevan dan berdaya saing.</p>

                    <h2>1. Kredibiliti dan Kepercayaan</h2>
                    <p>Pelanggan hari ini akan mencari bisnes anda di Google sebelum membuat keputusan pembelian. Tanpa website, bisnes anda kelihatan kurang profesional berbanding pesaing yang memiliki kehadiran online.</p>

                    <h2>2. Pemasaran 24/7</h2>
                    <p>Website anda bekerja untuk anda walaupun ketika anda tidur. Ia memaparkan produk dan servis anda kepada bakal pelanggan pada bila-bila masa, tanpa had waktu operasi.</p>

                    <h2>3. Jangkauan Lebih Luas</h2>
                    <p>Dengan website, anda tidak lagi terhad kepada pelanggan di kawasan sekitar sahaja. Bisnes anda boleh dijumpai oleh sesiapa sahaja di seluruh Malaysia, malah seluruh dunia.</p>

                    <h2>4. Kos Pemasaran Lebih Rendah</h2>
                    <p>Berbanding dengan iklan tradisional seperti billboard atau flyer, website memberikan ROI yang jauh lebih baik. Kos maintenance website adalah minima berbanding dengan hasil yang diperoleh.</p>

                    <h2>5. Data dan Analytics</h2>
                    <p>Dengan website, anda boleh track berapa ramai pengunjung, dari mana mereka datang, dan apa yang mereka cari. Data ini sangat berharga untuk membuat keputusan perniagaan.</p>

                    <h2>Kesimpulan</h2>
                    <p>Jangan biarkan bisnes anda ketinggalan. <strong>Website adalah pelaburan</strong>, bukan kos. Mulakan langkah pertama anda hari ini!</p>
                `,
                en: `
                    <p>In today's rapidly evolving digital era, having a website is no longer just an option - it's an <strong>absolute necessity</strong> for every business that wants to stay relevant and competitive.</p>

                    <h2>1. Credibility and Trust</h2>
                    <p>Today's customers will search for your business on Google before making a purchase decision. Without a website, your business appears less professional compared to competitors who have an online presence.</p>

                    <h2>2. 24/7 Marketing</h2>
                    <p>Your website works for you even while you sleep. It showcases your products and services to potential customers at any time, without operating hour limitations.</p>

                    <h2>3. Wider Reach</h2>
                    <p>With a website, you're no longer limited to customers in your surrounding area. Your business can be found by anyone across Malaysia, even worldwide.</p>

                    <h2>4. Lower Marketing Costs</h2>
                    <p>Compared to traditional advertising like billboards or flyers, websites provide much better ROI. Website maintenance costs are minimal compared to the results obtained.</p>

                    <h2>5. Data and Analytics</h2>
                    <p>With a website, you can track how many visitors you have, where they come from, and what they're looking for. This data is invaluable for making business decisions.</p>

                    <h2>Conclusion</h2>
                    <p>Don't let your business fall behind. <strong>A website is an investment</strong>, not a cost. Take your first step today!</p>
                `
            }
        },
        'landing-vs-website': {
            category: 'Guide',
            date: 'Jan 2026',
            readTime: { ms: '4 minit', en: '4 min read' },
            title: {
                ms: 'Landing Page vs Website: Mana Satu Yang Sesuai?',
                en: 'Landing Page vs Website: Which One is Right?'
            },
            content: {
                ms: `
                    <p>Ramai pemilik bisnes keliru antara <strong>landing page</strong> dan <strong>website penuh</strong>. Artikel ini akan menjelaskan perbezaan dan membantu anda memilih yang terbaik.</p>

                    <h2>Apa Itu Landing Page?</h2>
                    <p>Landing page adalah satu halaman yang direka khusus untuk satu tujuan - biasanya untuk menjual produk tertentu atau mengumpul leads. Ia fokus, ringkas, dan mempunyai satu CTA (Call-to-Action) yang jelas.</p>

                    <h2>Apa Itu Website?</h2>
                    <p>Website adalah koleksi beberapa halaman yang merangkumi maklumat lengkap tentang bisnes anda - profil syarikat, servis, portfolio, blog, dan sebagainya.</p>

                    <h2>Bila Perlu Landing Page?</h2>
                    <ul>
                        <li>Promosi produk atau servis tertentu</li>
                        <li>Kempen iklan Facebook/Google Ads</li>
                        <li>Launch produk baru</li>
                        <li>Webinar atau event registration</li>
                    </ul>

                    <h2>Bila Perlu Website Penuh?</h2>
                    <ul>
                        <li>Mahu membina kredibiliti jangka panjang</li>
                        <li>Ada pelbagai produk/servis</li>
                        <li>Perlukan SEO untuk organic traffic</li>
                        <li>Mahu berkongsi content/blog</li>
                    </ul>

                    <h2>Kesimpulan</h2>
                    <p>Untuk bisnes baru dengan satu produk utama, <strong>landing page adalah pilihan terbaik</strong>. Untuk bisnes yang sudah established dan mahu jangkauan lebih luas, <strong>website penuh adalah pelaburan bijak</strong>.</p>
                `,
                en: `
                    <p>Many business owners are confused between a <strong>landing page</strong> and a <strong>full website</strong>. This article will explain the differences and help you choose the best option.</p>

                    <h2>What Is a Landing Page?</h2>
                    <p>A landing page is a single page designed specifically for one purpose - usually to sell a specific product or collect leads. It's focused, concise, and has one clear CTA (Call-to-Action).</p>

                    <h2>What Is a Website?</h2>
                    <p>A website is a collection of multiple pages containing complete information about your business - company profile, services, portfolio, blog, and more.</p>

                    <h2>When Do You Need a Landing Page?</h2>
                    <ul>
                        <li>Promoting a specific product or service</li>
                        <li>Facebook/Google Ads campaigns</li>
                        <li>New product launches</li>
                        <li>Webinar or event registration</li>
                    </ul>

                    <h2>When Do You Need a Full Website?</h2>
                    <ul>
                        <li>Building long-term credibility</li>
                        <li>Multiple products/services</li>
                        <li>Need SEO for organic traffic</li>
                        <li>Want to share content/blog</li>
                    </ul>

                    <h2>Conclusion</h2>
                    <p>For new businesses with one main product, a <strong>landing page is the best choice</strong>. For established businesses wanting wider reach, a <strong>full website is a wise investment</strong>.</p>
                `
            }
        },
        'kos-buat-website': {
            category: 'Pricing',
            date: 'Feb 2026',
            readTime: { ms: '6 minit', en: '6 min read' },
            title: {
                ms: 'Berapa Kos Buat Website di Malaysia? (2026)',
                en: 'How Much Does a Website Cost in Malaysia? (2026)'
            },
            content: {
                ms: `
                    <p>Soalan paling popular: "Berapa kos nak buat website?" Berikut adalah <strong>panduan lengkap kos pembangunan website</strong> di Malaysia untuk tahun 2026.</p>

                    <h2>Faktor Yang Mempengaruhi Kos</h2>
                    <ul>
                        <li><strong>Jenis website</strong> - Landing page vs website penuh</li>
                        <li><strong>Bilangan halaman</strong> - Lebih banyak halaman, lebih tinggi kos</li>
                        <li><strong>Fungsi khas</strong> - E-commerce, booking system, portal ahli</li>
                        <li><strong>Design complexity</strong> - Custom design vs template</li>
                    </ul>

                    <h2>Anggaran Kos 2026</h2>
                    <p><strong>Landing Page:</strong> RM 390 - RM 590</p>
                    <p>Sesuai untuk promosi produk tertentu atau kempen iklan.</p>

                    <p><strong>Website Bisnes (5-10 halaman):</strong> RM 990 - RM 2,500</p>
                    <p>Termasuk profil syarikat, servis, portfolio, dan borang contact.</p>

                    <p><strong>E-Commerce:</strong> RM 1,890 - RM 5,000+</p>
                    <p>Full online store dengan payment gateway dan inventory management.</p>

                    <h2>Kos Tersembunyi Yang Perlu Diperhatikan</h2>
                    <ul>
                        <li><strong>Domain:</strong> RM 50-150/tahun untuk .com.my atau .my</li>
                        <li><strong>Hosting:</strong> RM 100-500/tahun bergantung pada traffic</li>
                        <li><strong>Maintenance:</strong> RM 50-200/bulan untuk update dan backup</li>
                        <li><strong>SSL Certificate:</strong> Biasanya percuma dengan hosting</li>
                    </ul>

                    <h2>Tips Jimat Kos</h2>
                    <p>Mulakan dengan yang penting sahaja, kemudian upgrade secara berperingkat. Jangan terus buat e-commerce jika bisnes masih baru - mulakan dengan landing page dulu!</p>
                `,
                en: `
                    <p>The most popular question: "How much does it cost to build a website?" Here's a <strong>complete guide to website development costs</strong> in Malaysia for 2026.</p>

                    <h2>Factors Affecting Cost</h2>
                    <ul>
                        <li><strong>Type of website</strong> - Landing page vs full website</li>
                        <li><strong>Number of pages</strong> - More pages, higher cost</li>
                        <li><strong>Special features</strong> - E-commerce, booking system, member portal</li>
                        <li><strong>Design complexity</strong> - Custom design vs template</li>
                    </ul>

                    <h2>2026 Cost Estimates</h2>
                    <p><strong>Landing Page:</strong> RM 390 - RM 590</p>
                    <p>Suitable for specific product promotions or ad campaigns.</p>

                    <p><strong>Business Website (5-10 pages):</strong> RM 990 - RM 2,500</p>
                    <p>Includes company profile, services, portfolio, and contact form.</p>

                    <p><strong>E-Commerce:</strong> RM 1,890 - RM 5,000+</p>
                    <p>Full online store with payment gateway and inventory management.</p>

                    <h2>Hidden Costs to Watch For</h2>
                    <ul>
                        <li><strong>Domain:</strong> RM 50-150/year for .com.my or .my</li>
                        <li><strong>Hosting:</strong> RM 100-500/year depending on traffic</li>
                        <li><strong>Maintenance:</strong> RM 50-200/month for updates and backups</li>
                        <li><strong>SSL Certificate:</strong> Usually free with hosting</li>
                    </ul>

                    <h2>Cost-Saving Tips</h2>
                    <p>Start with only what's essential, then upgrade gradually. Don't jump straight to e-commerce if your business is still new - start with a landing page first!</p>
                `
            }
        }
    };

    // Get current language
    function getCurrentLang() {
        return localStorage.getItem('site_lang') || 'ms';
    }

    // DOM Elements
    const blogModal = document.getElementById('blog-modal');
    const blogOverlay = document.getElementById('blog-modal-overlay');
    const blogCloseBtn = document.getElementById('blog-modal-close');
    const blogCards = document.querySelectorAll('.blog-card');

    // Populate modal with article content based on current language
    function populateBlogModal(articleId) {
        const article = blogArticles[articleId];
        if (!article) return;

        const lang = getCurrentLang();

        document.getElementById('blog-article-category').textContent = article.category;
        document.getElementById('blog-article-title').textContent = article.title[lang] || article.title.ms;
        document.getElementById('blog-article-date').textContent = article.date;
        document.getElementById('blog-article-read-time').textContent = article.readTime[lang] || article.readTime.ms;
        document.getElementById('blog-article-body').innerHTML = article.content[lang] || article.content.ms;
    }

    // Open modal - globally accessible
    window.openBlogModal = function (articleId) {
        populateBlogModal(articleId);
        blogModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    // Close modal - globally accessible
    window.closeBlogModal = function () {
        blogModal.classList.remove('active');
        document.body.style.overflow = '';
    };

    // Click handlers for blog cards
    blogCards.forEach(card => {
        card.addEventListener('click', () => {
            const articleId = card.getAttribute('data-article');
            if (articleId) {
                openBlogModal(articleId);
            }
        });
    });

    // Close handlers
    if (blogCloseBtn) blogCloseBtn.addEventListener('click', closeBlogModal);
    if (blogOverlay) blogOverlay.addEventListener('click', closeBlogModal);

    // Escape key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && blogModal && blogModal.classList.contains('active')) {
            closeBlogModal();
        }
    });
})();

// =================================================================
// UX IMPROVEMENTS - Sticky Header, Exit Popup, Progress Bar
// =================================================================

(function () {
    // === 1. STICKY HEADER ===
    const navbar = document.querySelector('.navbar');
    const hero = document.querySelector('.hero');

    if (navbar && hero) {
        const heroHeight = hero.offsetHeight;

        window.addEventListener('scroll', () => {
            if (window.scrollY > heroHeight - 100) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky');
            }
        });
    }

    // === 2. LOADING PROGRESS BAR ===
    const progressBar = document.getElementById('page-progress');

    if (progressBar) {
        // Mark as complete when page loads
        window.addEventListener('load', () => {
            setTimeout(() => {
                progressBar.classList.remove('loading');
                progressBar.classList.add('complete');
            }, 500);
        });
    }

    // === 3. EXIT-INTENT POPUP ===
    const exitPopup = document.getElementById('exit-popup');
    const exitPopupClose = document.getElementById('exit-popup-close');
    const exitPopupOverlay = document.getElementById('exit-popup-overlay');

    if (exitPopup) {
        let hasShownPopup = sessionStorage.getItem('exitPopupShown');
        let mouseLeftViewport = false;

        // Show popup when mouse leaves viewport (desktop)
        document.addEventListener('mouseout', (e) => {
            // Check if mouse left from top of viewport
            if (e.clientY < 10 && !hasShownPopup && !mouseLeftViewport) {
                mouseLeftViewport = true;

                // Small delay to avoid accidental triggers
                setTimeout(() => {
                    if (mouseLeftViewport && !hasShownPopup) {
                        exitPopup.classList.add('active');
                        document.body.style.overflow = 'hidden';
                        sessionStorage.setItem('exitPopupShown', 'true');
                        hasShownPopup = true;
                    }
                }, 100);
            }
        });

        // Reset flag when mouse enters viewport
        document.addEventListener('mouseenter', () => {
            mouseLeftViewport = false;
        });

        // Close popup handlers
        const closeExitPopup = () => {
            exitPopup.classList.remove('active');
            document.body.style.overflow = '';
        };

        if (exitPopupClose) exitPopupClose.addEventListener('click', closeExitPopup);
        if (exitPopupOverlay) exitPopupOverlay.addEventListener('click', closeExitPopup);

        // Escape key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && exitPopup.classList.contains('active')) {
                closeExitPopup();
            }
        });
    }

    // === 4. ENHANCED SCROLL ANIMATIONS ===
    // The existing Intersection Observer in the code handles .animate-on-scroll
    // This adds support for additional animation classes
    const animatedElements = document.querySelectorAll('.fade-up, .fade-down, .fade-left, .fade-right, .scale-up, .bounce-in, .zoom-on-scroll');

    if (animatedElements.length > 0 && 'IntersectionObserver' in window) {
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(el => animationObserver.observe(el));
    }
})();

// === 5. AUTO-UPDATE COPYRIGHT YEAR ===
(function () {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
})();


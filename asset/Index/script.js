// Menu toggle
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
toggle.addEventListener('click', () => menu.classList.toggle('active'));

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Language switch
const langSwitch = document.getElementById('lang-switch');

const langData = {
    en: {
        home: "Home",
        experience: "Experience",
        projects: "Projects",
        articles: "Articles",

        heroTitle: "Hi, I’m <span>Ahmad Yasin</span> 👋",
        heroDesc: "An Informatics Engineering graduate who is active in both web development and organizational activities. I enjoy building fast, clean, and meaningful Laravel - based systems while continuously learning how collaboration can create better solutions.",
        downloadCV: "Download CV",
        or: "or",
        seeProjects: "See My Projects",

        aboutTag: "About Me",
        aboutTitle: "Who am I?",
        aboutP1: "I’m a graduate of <strong>Informatics Engineering at Dian Nuswantoro University</strong>, with a strong passion for <strong>web development</strong> and <strong>information systems</strong>. I have hands-on experience developing web-based applications using <strong>Laravel</strong>, <strong>HTML</strong>, <strong>CSS</strong>, and <strong>MySQL</strong>.",
        aboutP2: "Beyond the tech world, I’ve been actively involved in various organizations such as the <strong>Student Representative Council</strong>, <strong>FL2MI Semarang Raya</strong>, and the <strong>Dian Nuswantoro Computer Club</strong>. These experiences shaped me into a communicative, adaptive, and collaborative person with strong leadership skills. For me, technology is more than just code — it’s a way to create real, meaningful impact.",

        contactTag: "Contact Me",

        footer: "© 2025 | Designed and coded by Fakhri Rasyid Saputro"
    },

    id: {
        home: "Beranda",
        experience: "Pengalaman",
        projects: "Proyek",
        articles: "Artikel",

        heroTitle: "Halo, Saya <span>Ahmad Yasin</span> 👋",
        heroDesc: "Lulusan Teknik Informatika yang aktif di dunia pengembangan web dan organisasi. Saya menikmati proses membangun sistem berbasis Laravel yang cepat,rapi,dan bermanfaat,sambil terus belajar bagaimana kolaborasi bisa melahirkan solusi yang lebih baik ",
        downloadCV: "Unduh CV",
        or: "atau",
        seeProjects: "Lihat Proyek Saya",

        aboutTag: "Tentang Saya",
        aboutTitle: "Siapa saya?",
        aboutP1: "Saya adalah lulusan <strong>Teknik Informatika Universitas Dian Nuswantoro</strong> yang memiliki ketertarikan besar di bidang <strong>pengembangan web</strong> dan <strong>sistem informasi</strong>. Saya berpengalaman mengembangkan aplikasi berbasis web menggunakan <strong>Laravel</strong>, <strong>HTML</strong>, <strong>CSS</strong>, dan <strong>MySQL</strong>.",
        aboutP2: "Selain fokus di dunia teknologi, saya juga aktif di berbagai organisasi seperti <strong>Dewan Perwakilan Mahasiswa</strong>, <strong>FL2MI Semarang Raya</strong>, dan <strong>Dian Nuswantoro Computer Club</strong>. Pengalaman tersebut membentuk saya menjadi pribadi yang adaptif, komunikatif, serta mampu memimpin dan bekerja sama dalam tim. Bagi saya, teknologi bukan sekadar kode — tapi cara untuk menciptakan solusi nyata yang berdampak positif.",

        contactTag: "Kontak Saya",

        footer: "© 2025 | Dirancang dan dikode oleh Fakhri Rasyid Saputro"
    }
};


// Event listener language switch
langSwitch.addEventListener('change', () => {
    const lang = langSwitch.value;

    // Ganti isi semua elemen yang punya data-key
    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        if (langData[lang][key]) {
            // jika mengandung HTML (seperti <span> atau <strong>)
            el.innerHTML = langData[lang][key];
        }
    });

    // Ganti navbar text
    document.querySelectorAll('#menu a').forEach(link => {
        const id = link.getAttribute('data-id');
        link.textContent = langData[lang][id];
    });
});
// Typing effect
const roles = ["Web Developer", "UI/UX Designer", "Event Enthusiast"];
const typedElement = document.getElementById("typed");
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const current = roles[roleIndex];
    const displayed = current.substring(0, charIndex);
    typedElement.textContent = displayed;

    if (!isDeleting && charIndex < current.length) {
        charIndex++;
        setTimeout(typeEffect, 120);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 60);
    } else {
        if (!isDeleting) {
            setTimeout(() => (isDeleting = true), 1000);
        } else {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
        setTimeout(typeEffect, 500);
    }
}
document.addEventListener("DOMContentLoaded", typeEffect);
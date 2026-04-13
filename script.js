const listWisata = [
    { nama: "Raja Ampat", desc: "Keindahan bawah laut Papua.", foto: ["https://picsum.photos", "https://picsum.photos", "https://picsum.photos"] },
    { nama: "Gunung Bromo", desc: "Lautan pasir yang menakjubkan.", foto: ["https://picsum.photos", "https://picsum.photos", "https://picsum.photos"] },
    { nama: "Borobudur", desc: "Kemegahan candi bersejarah.", foto: ["https://picsum.photos", "https://picsum.photos", "https://picsum.photos"] },
    { nama: "Labuan Bajo", desc: "Surga di Nusa Tenggara Timur.", foto: ["https://picsum.photos0", "https://picsum.photos1", "https://picsum.photos2"] },
    { nama: "Ubud, Bali", desc: "Ketenangan di tengah sawah.", foto: ["https://picsum.photos3", "https://picsum.photos4", "https://picsum.photos5"] },
    { nama: "Danau Toba", desc: "Danau vulkanik terbesar.", foto: ["https://picsum.photos6", "https://picsum.photos7", "https://picsum.photos8"] },
    { nama: "Nusa Penida", desc: "Tebing laut yang ikonik.", foto: ["https://picsum.photos9", "https://picsum.photos0", "https://picsum.photos1"] },
    { nama: "Wakatobi", desc: "Taman nasional bawah laut.", foto: ["https://picsum.photos2", "https://picsum.photos3", "https://picsum.photos4"] },
    { nama: "Kawah Ijen", desc: "Api biru yang langka.", foto: ["https://picsum.photos5", "https://picsum.photos6", "https://picsum.photos7"] },
    { nama: "Derawan", desc: "Berenang bersama penyu.", foto: ["https://picsum.photos8", "https://picsum.photos9", "https://picsum.photos0"] }
];

const btn = document.getElementById('btnExplore');
const hero = document.getElementById('hero');
const main = document.getElementById('main-content');
const container = document.getElementById('container-wisata');

btn.onclick = () => {
    // Animasi hero hilang
    hero.style.opacity = '0';
    setTimeout(() => {
        hero.style.display = 'none';
        main.classList.remove('hidden');
        main.style.opacity = '1';
        
        // Munculkan list wisata satu per satu
        listWisata.forEach((w, i) => {
            const card = document.createElement('div');
            card.className = 'destination-card';
            card.innerHTML = `
                <h2>${w.nama}</h2>
                <p>${w.desc}</p>
                <div class="photo-grid">
                    <img src="${w.foto[0]}"> <img src="${w.foto[1]}"> <img src="${w.foto[2]}">
                </div>
            `;
            container.appendChild(card);
            
            // Delay agar munculnya bergantian (natural)
            setTimeout(() => card.classList.add('muncul'), i * 300);
        });
    }, 800);
};

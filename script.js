const daftarWisata = [
    { judul: "Tana Toraja", desc: "Warisan budaya luhur dengan rumah adat Tongkonan yang megah.", foto: ["toraja1.jpg", "toraja2.jpg", "toraja3.jpg"] },
    { judul: "Gunung Bromo", desc: "Lautan pasir luas dengan kawah aktif dan matahari terbit yang magis.", foto: ["bromo1.jpg", "bromo2.jpg", "bromo3.jpg"] },
    { judul: "Raja Ampat", desc: "Surga tropis bawah laut dengan kejernihan air laut kristal yang indah.", foto: ["raja1.jpg", "raja2.jpg", "raja3.jpg"] },
    { judul: "Candi Borobudur", desc: "Mahakarya sejarah dunia dengan relief kuno yang penuh ketenangan.", foto: ["borobudur1.jpg", "borobudur2.jpg", "borobudur3.jpg"] },
    { judul: "Labuan Bajo", desc: "Gerbang petualangan naga purba Komodo dan pantai berwarna merah muda.", foto: ["bajo1.jpg", "bajo2.jpg", "bajo3.jpg"] },
    { judul: "Ubud, Bali", desc: "Pusat ketenangan jiwa yang dikelilingi hutan hijau dan sawah asri.", foto: ["ubud1.jpg", "ubud2.jpg", "ubud3.jpg"] },
    { judul: "Nusa Penida", desc: "Tebing tinggi Kelingking Beach yang ikonik di tepi samudera hindia.", foto: ["penida1.jpg", "penida2.jpg", "penida3.jpg"] },
    { judul: "Danau Toba", desc: "Danau vulkanik raksasa dengan udara sejuk dan kekayaan budaya Batak.", foto: ["toba1.jpg", "toba2.jpg", "toba3.jpg"] },
    { judul: "Kawah Ijen", desc: "Fenomena langka api biru dan kawah asam berwarna hijau toska.", foto: ["ijen1.jpg", "ijen2.jpg", "ijen3.jpg"] },
    { judul: "Wakatobi", desc: "Taman nasional bawah laut dengan terumbu karang terbaik di dunia.", foto: ["wakatobi1.jpg", "wakatobi2.jpg", "wakatobi3.jpg"] }
];

const btn = document.getElementById('btnExplore');
const hero = document.getElementById('hero');
const main = document.getElementById('main-content');
const container = document.getElementById('container-wisata');

btn.onclick = () => {
    hero.style.opacity = '0';
    hero.style.transform = 'translateY(-30px)';
    
    setTimeout(() => {
        hero.style.display = 'none';
        main.classList.remove('hidden');
        
        daftarWisata.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'destination-card';
            
            // PERBAIKAN: Memanggil foto satu per satu berdasarkan urutan di array
            card.innerHTML = `
                <div class="dest-info">
                    <h2>${item.judul}</h2>
                    <p>${item.desc}</p>
                </div>
                <div class="photo-slider">
                    <img src="${item.foto[0]}" alt="Slide 1">
                    <img src="${item.foto[1]}" alt="Slide 2">
                    <img src="${item.foto[2]}" alt="Slide 3">
                </div>
            `;
            container.appendChild(card);
            setTimeout(() => card.classList.add('muncul'), index * 300);
        });
    }, 800);
};
    

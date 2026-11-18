// ==========================================
// 1. FITUR DARK/LIGHT MODE TOGGLE
// ==========================================

// 1a. Ambil elemen tombol berdasarkan ID-nya
const themeToggleBtn = document.getElementById('theme-toggle');

// 1b. Tambahkan Event Listener: "Ketika tombol diklik, jalankan fungsi ini"
themeToggleBtn.addEventListener('click', function() {
    
    // 1c. Toggle class 'dark-mode' pada tag <body>
    document.body.classList.toggle('dark-mode');

    // 1d. Ubah teks dan ikon tombol berdasarkan mode saat ini
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = '☀️ Mode Terang';
    } else {
        themeToggleBtn.textContent = '🌙 Mode Gelap';
    }
});


// ==========================================
// 2. FITUR EFEK MENGETIK (TYPEWRITER)
// ==========================================

// 2a. Teks yang ingin ditampilkan
const textToType = "Mahasiswa Teknik Informatika UMC | Web & Mobile Developer";
// 2b. Ambil elemen teks target berdasarkan ID-nya
const typingElement = document.getElementById('typing-text');
// 2c. Variabel untuk menghitung indeks karakter
let charIndex = 0;

// 2d. Kosongkan teks awal agar efek mengetik dimulai dari nol
typingElement.textContent = "";

// 2e. Buat fungsi untuk mengetik
function typeText() {
    // Jika indeks karakter kurang dari panjang teks
    if (charIndex < textToType.length) {
        // Tambahkan satu karakter ke dalam elemen
        typingElement.textContent += textToType.charAt(charIndex);
        // Naikkan indeks untuk karakter selanjutnya
        charIndex++;
        // Panggil fungsi ini lagi setelah 100 milidetik (0.1 detik)
        setTimeout(typeText, 100);
    }
}

// 2f. Jalankan fungsi mengetik saat halaman selesai dimuat
window.onload = function() {
    typeText();
};
// ===============================
// DATA WEBSITE
// ===============================

const namaPacar = prompt("Masukkan nama pacarmu:") || "Sayang";

const tanggalJadian = prompt(
  "Masukkan tanggal jadian (format: YYYY-MM-DD):"
) || "2025-01-01";

// ===============================
// ELEMENT
// ===============================

const namaTampil = document.getElementById("namaTampil");
const namaInfo = document.getElementById("namaInfo");
const footerNama = document.getElementById("footerNama");
const tanggalInfo = document.getElementById("tanggalInfo");
const lamaBersama = document.getElementById("lamaBersama");

const mulaiBtn = document.getElementById("mulaiBtn");
const kejutan = document.getElementById("kejutan");

const fotoInput = document.getElementById("fotoInput");
const galeri = document.getElementById("galeri");

const loveBtn = document.getElementById("loveBtn");
const loveResult = document.getElementById("loveResult");

// ===============================
// NAMA
// ===============================

namaTampil.textContent = namaPacar + " ❤️";
namaInfo.textContent = namaPacar;
footerNama.textContent = namaPacar;

// ===============================
// TANGGAL
// ===============================

const tanggal = new Date(tanggalJadian + "T00:00:00");

if (!isNaN(tanggal.getTime())) {

  tanggalInfo.textContent = tanggal.toLocaleDateString(
    "id-ID",
    {
      day: "numeric",
      month: "long",
      year: "numeric"
    }
  );

  hitungLama();
}

// ===============================
// HITUNG LAMA BERSAMA
// ===============================

function hitungLama() {

  const sekarang = new Date();

  let tahun = sekarang.getFullYear() - tanggal.getFullYear();
  let bulan = sekarang.getMonth() - tanggal.getMonth();
  let hari = sekarang.getDate() - tanggal.getDate();

  if (hari < 0) {
    bulan--;
    const hariBulanSebelumnya = new Date(
      sekarang.getFullYear(),
      sekarang.getMonth(),
      0
    ).getDate();

    hari += hariBulanSebelumnya;
  }

  if (bulan < 0) {
    tahun--;
    bulan += 12;
  }

  if (tahun < 0) {
    lamaBersama.textContent = "Belum dimulai ❤️";
    return;
  }

  lamaBersama.textContent =
    tahun + " tahun " +
    bulan + " bulan " +
    hari + " hari";
}

// Update setiap menit
setInterval(hitungLama, 60000);

// ===============================
// BUKA KEJUTAN
// ===============================

mulaiBtn.addEventListener("click", function () {

  kejutan.classList.remove("hidden");

  kejutan.scrollIntoView({
    behavior: "smooth"
  });

  buatHati();
});

// ===============================
// UPLOAD FOTO
// ===============================

fotoInput.addEventListener("change", function () {

  const files = Array.from(this.files);

  files.forEach(function(file) {

    if (!file.type.startsWith("image/")) {
      return;
    }

    const reader = new FileReader();

    reader.onload = function(event) {

      const img = document.createElement("img");

      img.src = event.target.result;
      img.alt = "Kenangan bersama";

      galeri.appendChild(img);
    };

    reader.readAsDataURL(file);

  });

});

// ===============================
// TOMBOL SAYANG
// ===============================

loveBtn.addEventListener("click", function () {

  loveResult.textContent =
    "Aku juga sayang kamu, " +
    namaPacar +
    " ❤️🥰";

  for (let i = 0; i < 15; i++) {
    setTimeout(buatHati, i * 100);
  }

});

// ===============================
// ANIMASI HATI
// ===============================

function buatHati() {

  const heartsContainer =
    document.querySelector(".hearts");

  const heart =
    document.createElement("span");

  const jenisHati = [
    "❤️",
    "💗",
    "💕",
    "💖",
    "💘"
  ];

  heart.textContent =
    jenisHati[
      Math.floor(Math.random() * jenisHati.length)
    ];

  heart.style.left =
    Math.random() * 100 + "vw";

  heart.style.animationDuration =
    (3 + Math.random() * 4) + "s";

  heart.style.fontSize =
    (15 + Math.random() * 20) + "px";

  heartsContainer.appendChild(heart);

  setTimeout(function() {
    heart.remove();
  }, 7000);
}

// Hati otomatis
setInterval(buatHati, 1200);
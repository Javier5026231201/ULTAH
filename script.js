// JavaScript untuk slideshow gambar
const slideshow = document.getElementById('slideshow');
const imageList = ['javier1.JPG', 'jett.png']; // Daftar gambar untuk slideshow
let currentIndex = 0;

function changeImage() {
  // Set opacity ke 0 untuk memulai transisi
  slideshow.style.opacity = 0;

  // Tunggu sebentar sebelum mengganti gambar dan mengembalikan opacity ke 1
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % imageList.length; // Ganti ke gambar berikutnya
    slideshow.src = imageList[currentIndex]; // Update gambar
    slideshow.style.opacity = 1; // Kembalikan opacity ke 1
  }, 500); // Tunggu 500ms sebelum mengganti gambar
}

// Panggil fungsi ini sesuai dengan interval (ganti gambar setiap 3 detik)
setInterval(changeImage, 3000); // Ganti gambar setiap 3 detik

// JavaScript untuk menangani form RSVP
document.getElementById('rsvpForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah pengiriman form secara default

  // Ambil nilai dari input form
  const name = document.getElementById('name').value;
  const relationship = document.getElementById('relationship').value;
  const message = document.getElementById('message').value;

  // Buat elemen baru untuk menampilkan data RSVP
  const rsvpItem = document.createElement('li');
  rsvpItem.innerHTML = `
    Haloo, Gw <strong>${name}</strong>, Gw <strong>${relationship}</strong>. 
    Gw ada pesan singkat: <em>"${message}"</em>
  `;

  // Tambahkan RSVP item ke daftar yang ada
  document.getElementById('rsvpDisplay').appendChild(rsvpItem);

  // Kosongkan form setelah mengirim
  document.getElementById('rsvpForm').reset();
});

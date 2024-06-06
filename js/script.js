let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    console.log(id);

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

document.querySelectorAll(".menu-item").forEach((item) => {
  item.addEventListener("click", function (event) {
    // Menghapus class 'active' dari semua item menu
    document.querySelectorAll(".menu-item").forEach((menu) => {
      menu.classList.remove("active");
    });

    // Menambahkan class 'active' ke item menu yang diklik
    event.currentTarget.classList.add("active");
  });
});

const form = document.getElementById("message-form");
const namaMessage = document.getElementById("nama-message");
const tanggalLahirMessage = document.getElementById("tanggal-lahir-message");
const jenisKelaminMessage = document.getElementById("jenis-kelamin-message");
const pesanMessage = document.getElementById("pesan-message");
const currentTime = document.getElementById("current-time");

// Get current time
const now = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZoneName: "short",
};
currentTime.textContent = now.toLocaleDateString("en-US", options);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get form values
  const nama = document.getElementById("nama").value;
  const tanggalLahir = document.getElementById("tanggal-lahir").value;
  const jenisKelamin = document.querySelector(
    'input[name="jenis-kelamin"]:checked'
  ).value;
  const pesan = document.getElementById("pesan").value;

  // Display message
  namaMessage.textContent = nama;
  tanggalLahirMessage.textContent = tanggalLahir;
  jenisKelaminMessage.textContent = jenisKelamin;
  pesanMessage.textContent = pesan;
});



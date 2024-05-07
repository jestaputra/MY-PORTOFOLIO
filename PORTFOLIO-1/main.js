let tabTitles = document.getElementsByClassName("tab-tittle");
let info = document.getElementsByClassName("info");
let tabTitle = 0;
let infos = 0;
let kotak = document.querySelector(".kotak");
let container = document.getElementById("container");
let containerContent = document.querySelector(".container-content");

// --------------------------------SHOW ABOUT----------------------------------

function openTab(tabname) {
  for (tabTitle of tabTitles) {
    tabTitle.classList.remove("active-title");
  }
  for (infos of info) {
    infos.classList.remove("active-subtitle");
  }
  event.currentTarget.classList.add("active-title");
  document.getElementById(tabname).classList.add("active-subtitle");
}

// -----------------------------AUTO SCROLL----------------------------------

// Fungsi untuk menangani klik tombol navigasi
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  const yOffset = -80; // Sesuaikan dengan offset header/navbar Anda
  const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });

  // Sembunyikan menu (jika ditampilkan)
  const menu = document.querySelector(".kotak");
  menu.classList.remove("show");
  container.classList.remove("blurr");
  containerContent.classList.remove("blurr");
}

// Fungsi untuk menambahkan event listener pada setiap tombol navigasi
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a, .kotak li a"); // Pilih juga tautan di dalam kotak menu
  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      scrollToSection(targetId);
    });
  });

  // Fungsi untuk menampilkan atau menyembunyikan menu
  function toggleMenu() {
    const menu = document.querySelector(".kotak");
    menu.classList.toggle("show");
    container.classList.add("blurr");
    containerContent.classList.add("blurr");
  }

  // Fungsi untuk menampilkan atau menyembunyikan menu saat klik ikon hamburger
  const menuIcon = document.querySelector(".bx-list-ul");
  menuIcon.addEventListener("click", toggleMenu);

  // Fungsi untuk menyembunyikan menu saat klik ikon close (X)
  const closeIcon = document.querySelector(".bx-x");
  closeIcon.addEventListener("click", () => {
    toggleMenu()
    container.classList.remove("blurr");
    containerContent.classList.remove("blurr");
  });

  // Fungsi untuk menyembunyikan menu saat pengguna mengklik tautan di dalamnya
  const kotakLinks = document.querySelectorAll(".kotak li a");
  kotakLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const menu = document.querySelector(".kotak");
      menu.classList.remove("show");
      container.classList.remove("blurr");
      containerContent.classList.remove("blurr");
    });
  });
});

// --------------------------VALIDASI CONTACT------------------------------
let alertt = document.querySelector(".alert");
function sendMsg() {
    let emailInput = document.getElementById("email");
    let nameInput = document.getElementById("name");
    let msgInput = document.getElementById("massage");
    
    if(!emailInput.value.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/) || emailInput.value == ""){
        alertt.innerHTML = "*Your input is wrong"
        alertt.classList.add("wrong")
        setTimeout(() => {
            alertt.innerHTML = ""
        }, 3000)
    }else if(nameInput.value == "" || nameInput.value.length < 5){
        alertt.innerHTML = "*Your input is wrong"
        alertt.classList.add("wrong")
        setTimeout(() => {
            alertt.innerHTML = ""
        }, 3000)
    }else if(msgInput.value.length < 40){
        alertt.innerHTML = "Your input is wrong"
        alertt.classList.add("wrong")
        setTimeout(() => {
            alertt.innerHTML = ""
        }, 3000)
    }else{
        alertt.innerHTML = "your massage has been send"
        alertt.classList.add("succes")
        alertt.classList.remove("wrong")
        setTimeout(() => {
            alertt.innerHTML = ""
        }, 3000)
    }
    emailInput.value = ""
    msgInput.value = ""
    nameInput.value = ""
}
// function showMenu(){
//     kotak.classList.add("show")
//     container.classList.add("blurr")
//     containerContent.classList.add("blurr")
//   }
// function hideMenu(){
//     kotak.classList.remove("show")
//     container.classList.remove("blurr")
//     containerContent.classList.remove("blurr")
// }

// // ------------------------------- AUTO SCROLL ------------------------------

// // Fungsi untuk menangani klik tombol navigasi
// function scrollToSection(sectionId) {
//     const section = document.getElementById(sectionId);
//     const yOffset = -80; // Sesuaikan dengan offset header/navbar Anda
//     const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

//     window.scrollTo({ top: y, behavior: 'smooth' });
// }

// // Fungsi untuk menambahkan event listener pada setiap tombol navigasi
// document.addEventListener('DOMContentLoaded', function() {
//     const navLinks = document.querySelectorAll('nav a');
//     navLinks.forEach(link => {
//         link.addEventListener('click', function(event) {
//             event.preventDefault();
//             const targetId = this.getAttribute('href').substring(1);
//             scrollToSection(targetId);
//         });
//     });
// });

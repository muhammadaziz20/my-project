const nameInp = document.getElementById("nameInp");
const surnameInp = document.getElementById("surnameInp");
const nameText = document.getElementById("name");
const surnameText = document.getElementById("surname");
const submitBtn = document.getElementById("submitBtn");
const buySurnameBtn = document.getElementById("buySurnameBtn");
const profileImg = document.getElementById("profileImg");
const avatarText = document.getElementById("avatarText");
const greeting = document.getElementById("greeting");
const tg = document.getElementById("tgPremiumBtn");

// Telegram Premium tugmasi
nameInp.addEventListener("input", () => {
    const realName = nameInp.value.trim();
    if (realName === "Muhammadyusuf") {
        tg.style.display = "block";
    } else {
        tg.style.display = "none";
    }
});

tg.addEventListener('click', () => {
    alert("Muhammadyusuf aka faqat sizda bor ekan");
});

// Ismga mos rasm
const imageMap = {
    "izatullox": "teacher.jpg",
    "qosimjon": "qosimjon.jpg",
    "muhammadyusuf": "muhammadyusuf.jpg",
    "abduvohid": "abduvohid.jpg",
    "abdullox": "Abdullox.jpg",
    "muhammadaziz": "muhammadaziz.jpg",
    "umidjon": "dadam.jpg",
    "oyatillo": "oyatillo.jpg",
    "muhammaddamin": "sherzod.jpg",
    "muhammadamin": "sherzod.jpg",
    "Xalimaxon": "xalimaxon.jpg",
    "sevaraxon": "sevaraxon.jpg",
    "oyshaxon": "oysha.jpg",
    "tabassumxon": "tabassumxon.jpg",
    "mohiniso": "mohiniso.jpg",
    "anvarjon": "anvarjon.jpg",
    "gulchehraxon": "gulchehraxon.jpg",
    "dilshodbek": "dilshodbek.jpg",
    "boburjon": "boburjon.jpg",
};

// 1 daqiqa ichida ism kiritilmasa alert
setTimeout(() => {
    if (nameInp.value.trim() === "") {
        alert("Iltimos, ism kiritishingiz kerak!");
    }
}, 60000);

// Submit tugmasi
submitBtn.addEventListener("click", () => {
    const nameVal = nameInp.value.trim();
    const surnameVal = surnameInp.value.trim();

    if (nameVal === "") {
        alert("Ism kiritish majburiy!");
        return;
    }

    // Ism va familya chiqarish
    nameText.textContent = nameVal;
    surnameText.textContent = surnameVal || "";
    buySurnameBtn.style.display = surnameVal ? "none" : "inline-block";

    const key = nameVal.toLowerCase();

    // Rasmni tanlash
    if (imageMap[key]) {
        profileImg.src = imageMap[key] + "?v=" + new Date().getTime(); // rasm yangilash
    } else {
        profileImg.src = "default.png" + "?v=" + new Date().getTime(); // default rasm
    }

    profileImg.style.display = "block"; // rasm ko‘rinadi
    avatarText.textContent = ""; // bosh harf yo‘q qilinadi

    // Greeting matni
    const greetName = nameVal || "Dear person";
    greeting.textContent = `Happy New Year, ${greetName}! Wishing you joy, success, and happiness in the coming year!`;
});








const nameInp = document.getElementById("nameInp");
const surnameInp = document.getElementById("surnameInp");
const nameText = document.getElementById("name");
const surnameText = document.getElementById("surname");
const submitBtn = document.getElementById("submitBtn");
const buySurnameBtn = document.getElementById("buySurnameBtn");
const profileImg = document.getElementById("profileImg");
const avatarText = document.getElementById("avatarText");
const greeting = document.getElementById("greeting");
const tg = document.getElementById("tgPremiumBtn")

nameInp.addEventListener("input", () => {
    const realName = nameInp.value.trim();

    if (realName === "Muhammadyusuf") {
        tg.style.display = "block";
    } else {
        tg.style.display = "none";
    }
});

tg.addEventListener('click', () => {
    alert("Muhammadyusuf aka faqat sizda bor ekan")
})

const imageMap = {
    "izatullox": "teacher.jpg",
    "qosimjon": "qosimjon.jpg",
    "muhammadyusuf": "muhammadyusuf.jpg",
    "abduvohid": "abduvohid.jpg",
    "abdullox": "Abdullox.jpg",
    "muhammadaziz": "muhammadaziz.jpg",
    "umidjon": "umidjon.jpg",
    "oyatillo": "oyatillo.jpg",
    "muhammaddamin": "sherzod.jpg",
    "muhammadamin": "sherzod.jpg",
    "xalimaxon": "xalimaxon.jpg"
};

// 1 daqiqa ichida ism kiritilmasa alert
setTimeout(() => {
    if (nameInp.value.trim() === "") {
        alert("Iltimos, ism kiritishingiz kerak!");
    }
}, 60000);

submitBtn.addEventListener("click", () => {
    const nameVal = nameInp.value.trim();
    const surnameVal = surnameInp.value.trim();

    if (nameVal === "") {
        alert("Ism kiritish majburiy!");
        return;
    }

    nameText.textContent = nameVal;
    surnameText.textContent = surnameVal || "";
    buySurnameBtn.style.display = surnameVal ? "none" : "inline-block";

    const key = nameVal.toLowerCase();

    if (imageMap[key]) {
        profileImg.src = imageMap[key];
        profileImg.style.display = "block";
        avatarText.textContent = "";
    } else {
        profileImg.style.display = "none";
        avatarText.textContent = nameVal.charAt(0).toUpperCase() + (surnameVal ? surnameVal.charAt(0).toUpperCase() : "");
    }

    // Greeting matni
    const greetName = nameVal || "Dear person";
    greeting.textContent = `Happy New Year, ${greetName}! Wishing you joy, success, and happiness in the coming year!`;
});




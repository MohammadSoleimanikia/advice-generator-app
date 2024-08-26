let adviceIdApi;
let adviceTextApi;
const adviceText = document.getElementById("advice-text");
const adviceNumber = document.getElementById("advice-number");
const dice = document.getElementById("dice");
const loading = document.getElementById("loading");

dice.addEventListener("click", () => {
    loading.classList.remove("hideContent");
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      adviceIdApi = data.slip.id;
      adviceTextApi = data.slip.advice;
      adviceText.innerText = `“${adviceTextApi}”`;
      adviceNumber.innerText = `ADVICE #${adviceIdApi}`;
    })
    .catch((error) => {
      console.error("Error:", error);
    })
    .finally(()=>{
        loading.classList.add('hideContent');
    });
});

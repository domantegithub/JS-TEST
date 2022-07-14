/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const buttonClick = document.getElementById("btn__element");

let initialValue = 0;

buttonClick.addEventListener("click", () => {
  initialValue++;
  const times = document.getElementById("btn__state");
  times.textContent = initialValue;
});

const resetValue = document.getElementById("btn__state");
resetValue.addEventListener("click", () => {
  initialValue = 0;
  const resetToZero = document.getElementById("btn__state");
  resetToZero.textContent = initialValue;
});

let tg = window.Telegram.WebApp;

this.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

// Получаем ссылки на кнопки и добавляем их в массив
for (let i = 1; i <= buttonCount; i++) {
    const btn = document.getElementById(`btn${i}`);
    buttons.push(btn);
}

// Создаем кнопки с автоматической нумерацией и обработчиком событий
for (let i = 0; i <= buttonCount; i++) {
  const btn = document.createElement("button");
  btn.textContent = `Button ${i}`;
  btn.addEventListener("click", function() {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.setText(`Вы выбрали товар ${i}!`);
      item = `${i}`;
      tg.MainButton.show();
    }
  });
  document.body.appendChild(btn);
}

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.first_name}
${tg.initDataUnsafe.last_name}`;

usercard.appendChild(p);

// funkcja do losowania kolorów
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// funkcja do zmiany tła całej sekcji body - odwołuję się do 'backgroundColor' i uruchamiam funkcję do zmiany tła
function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  // zmiana koloru co 1 sekundę
  setTimeout(changeBackgroundColor, 1000);
}
// dodaję operację do przycisku 'start' (nasłuchiwanie na kliknięcie) - po kliknięciu ma się wykonać funkcja
document.querySelector('[data-start]').addEventListener('click', function () {
  // po kliknięciu na 'start', aby przycisk nie był cały czas włączony, to ustawiamy go na 'disabled'
  this.disabled = true;
  // po kliknięciu na 'start', przycisk 'stop' ma być włączony
  document.querySelector('[data-stop]').disabled = false;
  // ma się wykonać funkcja zmiany tła
  changeBackgroundColor();
});

// dodaję operację do przycisku 'stop' (nasłuchiwanie na kliknięcie)
document.querySelector('[data-stop]').addEventListener('click', function () {
  // po kliknięciu na 'stop' przycisk ma zostać wyłączony
  this.disabled = true;
  // po kliknięciu na 'stop', przyciak 'start' ma zostać włączony
  document.querySelector('[data-start]').disabled = false;
  // to mi nie działa, nie wiem jak ustawić wyłączenie nasłuchiwania dla przycisku 'start'
  document
    .querySelector('[data-start]')
    .removeEventListener('click', changeBackgroundColor);
});

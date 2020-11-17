import menuCardTpl from '../src/templates/menu-card.hbs';
import menuCards from './menu.json';


// переменные все
const menuCardsListRef = document.querySelector(".js-menu");
const switchRef = document.querySelector("#theme-switch-toggle");
const bodyRef = document.querySelector("body");
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

//создаем разметку HTML при помощи шаблонизатора HANDLEBAR
const markup = menuCardTpl(menuCards)

//парсим HTML на страничку
menuCardsListRef.insertAdjacentHTML("beforeend", markup)

//повесить слушателя на чекбокс
switchRef.addEventListener("change", changeTheme)

//функция для изменения темы
function changeTheme() {
  if (bodyRef.classList.contains(Theme.LIGHT)) {
    bodyRef.classList.remove(Theme.LIGHT)
    bodyRef.classList.add(Theme.DARK)
    localStorage.setItem("theme", Theme.DARK)
  } else if (bodyRef.classList.contains(Theme.DARK)) {
    bodyRef.classList.remove(Theme.DARK)
    bodyRef.classList.add(Theme.LIGHT)
    localStorage.setItem("theme", Theme.LIGHT)
  } 
}

// меняем положение ползунка в соответсвии с выбранной темой
actualSwith()
function actualSwith() { 
    const chosenTheme = localStorage.getItem("theme")
  if (chosenTheme) {
    if (chosenTheme === Theme.DARK) {
      bodyRef.classList.add(Theme.DARK)
      switchRef.checked = true;
    } else if (chosenTheme === Theme.LIGHT) {
      bodyRef.classList.add(Theme.LIGHT)
      switchRef.checked = false;
    }
  } else { bodyRef.classList.add(Theme.LIGHT)}
  }

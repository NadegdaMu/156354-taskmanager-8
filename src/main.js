import makeFilter from './make-filter';
import makeTask from './make-task';

const filterElements = document.querySelector(`.main__filter`);
const taskElements = document.querySelector(`.board__tasks`);
const NEW_NUMBER = 4;

// Функция генерирующая целое число в диапазоне, включая минимальное и максимальное.
const getRandomInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Массив имен фильтров
const nameFilter = [`ALL`, `OVERDUE`, `TODAY`, `FAVORITES`, `FAVORITES`, `Repeating`, `Tags`, `ARCHIVE`];

// Функция отрисовки фильтров
const renderFilterElements = () => {

  filterElements.insertAdjacentHTML(`beforeend`, makeFilter(nameFilter[0], getRandomInRange(1, 100), true));

  for (let i = 1; i < nameFilter.length; i++) {
    filterElements.insertAdjacentHTML(`beforeend`, makeFilter(nameFilter[i], getRandomInRange(1, 100)));
  }
};

renderFilterElements();

// Функция отрисовки карточек товара
const renderTasksElement = (number) => {
  for (let i = 0; i < number; i++) {
    taskElements.insertAdjacentHTML(`beforeend`, makeTask());
  }
};

renderTasksElement(NEW_NUMBER);


// Переключение фильтров
const filterClickHandler = () => {
  taskElements.innerHTML = ``;
  renderTasksElement(getRandomInRange(1, 5));
};

const filterCollection = filterElements.querySelectorAll(`.filter__label`);

filterCollection.forEach((el) => el.addEventListener(`click`, filterClickHandler));

// Функция отрисовки шаблона одного фильтра
export default (caption, amount, isChecked = false) => `
    <label
    for="filter-${caption.toLowerCase()}"
    class="filter__label"
    >${caption}
    <span class="filter__all-count">${amount}</span>
    </label>
    <input
    type="radio"
    id="filter-${caption.toLowerCase()}"
    class="filter__input visually-hidden"
    name="filter"
    ${isChecked ? ` checked` : ``}
    /><br />
  `;

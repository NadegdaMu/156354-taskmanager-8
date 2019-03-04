const task = () => ({
  title: [
    `Изучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`,
  ],
  dueDate: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,
  tags: new Set([
    `homework`,
    `theory`,
    `practice`,
    `intensive`,
    `keks`
  ]),
  picture: `http://picsum.photos/100/100?r=`,
  color: [
  `black`,
  `pink`,
  `yellow`,
  `blue`,
  `green`
  ],
  repeatingDays: {
    'mo': true,
    'tu': false,
    'we': true,
    'th': false,
    'fr': false,
    'sa': true,
    'su': false,
  },
  isFavorite: false,
  isDone: false,
  randomTitleValue () {
    return this.title[Math.floor(Math.random() * 3)];
  },
  randomTagsValue () {
    return [...this.tags][Math.floor(Math.random() * this.tags.size)];
  },
  lastColorIndex: 0,
  colorValue () {
    let nextColor = this.color[this.lastColorIndex];
    this.lastColorIndex++;
    return nextColor;
  },
  getPicture () {
    return this.picture +`${Math.floor(Math.random() * 4)}`;
  }
});

export {task};


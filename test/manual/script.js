import '../../dist/text-randomizer.js';

const textRandomizer = new Randomizer();

const options = {
  tags: {
    open: '{{',
    close: '}}',
  },
  actions: {
    city() {
      const array = [
        'г. Донецк, Ростовская область',
        'г. Зеленоград, Московская область',
        'п. Нижние Васюки, Воронежская область'
      ];
      const index = Tools.Choice(array);
      return array[index];
    },
    facilities() {
      const result = textRandomizer.render('{{choice(["школы", "детские сады", "магазины", "поликлиника", "рынок", "гаражи", "стоянка летающих тарелок", "отделение трансплантологии", "ЗАГС", "морг"], 6, true)}}');
      const array = ['Все в шаговой доступности', 'Всё это капец как далеко'];
      const index = Tools.Choice(array);
      return `Рядом находятся ${result}. ${array[index]}.`;
    },
    names() {
      const users = [
        { name: 'Федора Ивановича' },
        { name: 'Акакия Поликарповича' },
        { name: 'Феоктиста Игнатьевича' },
        { name: 'Ивана Ивановича' }
      ];
      const user = Tools.Choice(users, 1, true);
      return user.name;
    },
  },
};

textRandomizer.setOptions(options);

window.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('button');
  const textarea = document.querySelector('textarea');
  const text = document.querySelector('.text');

  button.addEventListener('click', () => {
    text.innerHTML = textRandomizer.render(textarea.value);
  });
});

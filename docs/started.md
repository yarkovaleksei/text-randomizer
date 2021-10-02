# Начало использования

> Мы будем использовать [ES2015](https://github.com/lukehoban/es6features) в примерах кода в руководстве.

### HTML

```html
<script src="https://unpkg.com/text-randomizer/dist/text-randomizer.js"></script>

<div class="container">
  <div class="row">
    <textarea>{{random(['Внимание', 'Срочно', 'Не срочно'])}}!!! Продам {{number(1, 4)}}-комнатную квартиру в {{city}}.
В квартире зимой очень тепло, не угловая. Для {{random(['летнего', 'зимнего'])}} периода имеется {{random(['кондиционер', 'вентилятор', 'обогреватель'])}}.
Вся система отопления и водоснабжения в отличном состоянии, на все есть счетчики.
Дом находится в {{random(['тихом районе', 'жопе мира', 'эпицентре ада'])}}, в подъезде {{random(['хорошие соседи', 'ночуют бомжи', 'воняет'])}}.
{{facilities}}
Звонить по номеру 89991234567, спросить {{names}}.</textarea>
  </div>
  <div class="row">
    <button>Сгенерировать текст</button>
  </div>
  <div class="row">
    <div class="text"></div>
  </div>
</div>

<script>
  const textRandomizer = new window.Randomizer();

  const options = {
    // Можно переопределить открывающий и закрывающий тег
    tags: {
      open: '{{',
      close: '}}',
    },
    // По умолчанию доступны number, choice и random
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
</script>
```

### JavaScript

```html
<div class="container">
  <div class="row">
    <textarea>{{random(['Внимание', 'Срочно', 'Не срочно'])}}!!! Продам {{number(1, 4)}}-комнатную квартиру в {{city}}.
В квартире зимой очень тепло, не угловая. Для {{random(['летнего', 'зимнего'])}} периода имеется {{random(['кондиционер', 'вентилятор', 'обогреватель'])}}.
Вся система отопления и водоснабжения в отличном состоянии, на все есть счетчики.
Дом находится в {{random(['тихом районе', 'жопе мира', 'эпицентре ада'])}}, в подъезде {{random(['хорошие соседи', 'ночуют бомжи', 'воняет'])}}.
{{facilities}}
Звонить по номеру 89991234567, спросить {{names}}.</textarea>
  </div>
  <div class="row">
    <button>Сгенерировать текст</button>
  </div>
  <div class="row">
    <div class="text"></div>
  </div>
</div>
```

```javascript
import { Randomizer } from 'text-randomizer';

const textRandomizer = new Randomizer();

const options = {
  // Можно переопределить открывающий и закрывающий тег
  tags: {
    open: '{{',
    close: '}}',
  },
  // По умолчанию доступны number, choice и random
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
```

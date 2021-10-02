# Дополнительный класс Tools

Метода класса статичны и не требуют создания экземпляра класса

# Методы

### Number

Метод возвращает случайное число в заданном диапазоне.

Аргументы:

|   name   |   type   | default  | required |
|----------|----------|----------|----------|
| `min`    | `Number` |   `0`    |          |
| `max`    | `Number` |   `1`    |          |

Пример:

```javascript
import { Randomizer, Tools } from 'text-randomizer';

const options = {
  actions: {
    number(min, max) {
      return Tools.Number(min, max);
    },
  },
};

const textRandomizer = new Randomizer(options);

textRandomizer.render("{{number(1, 4)}}"); // Вернёт число от 1 до 4
```

Возвращаемое значение: `number`

### Choice

Метод возвращает случайный индекс коллекции `array`.
Если передан аргумент `num`, то вернется массив случайных индексов коллекции `array` в количестве `num` элементов.
Если передан аргумент `mode`, то вернется не индекс, а значение элемента коллекции `array`.

Аргументы:

|   name   |   type   | default  | required |
|----------|----------|----------|----------|
| `array`  | `Array or Object` |          |     +    |
| `num`  | `Number` |    `1`   |          |
| `mode`  | `Boolean` |    `false`   |          |

Пример:

```javascript
import { Randomizer, Tools } from 'text-randomizer';

const options = {
  actions: {
    choice(array, num, mode) {
      return Tools.Choice(array, num, mode);
    },
  },
};

const textRandomizer = new Randomizer(options);

textRandomizer.render("{{choice(['one', 'two', 'three', 'four'])}}"); // Вернёт случайный индекс из массива ("0"..."3")
textRandomizer.render("{{choice({a: 'avalue', b: 'bvalue', c: 'cvalue'})}}"); // Вернёт случайный ключ из объекта ("a", "b" или "c)
textRandomizer.render("{{choice(['one', 'two', 'three', 'four'], 2)}}"); // Вернёт 2 случайных индекса из массива (["1", "2"])
textRandomizer.render("{{choice({a: 'avalue', b: 'bvalue', c: 'cvalue'}, 2)}}"); // Вернёт 2 случайных ключа из объекта (["a", "b"])
textRandomizer.render("{{choice(['one', 'two', 'three', 'four'], 1, true)}}"); // Вернёт случайное число из массива ("one")
textRandomizer.render("{{choice({a: 'avalue', b: 'bvalue', c: 'cvalue'}, 1, true)}}"); // Вернёт случайное значение из объекта ("avalue", "bvalue" или "cvalue")
```

Возвращаемое значение: `any`


### Random

Метод возвращает случайный элемент коллекции.

Аргументы:

|   name   |   type   | default  | required |
|----------|----------|----------|----------|
| `array`  | `Array or Object` |          |     +    |

Пример:

```javascript
import { Randomizer, Tools } from 'text-randomizer';

const options = {
  actions: {
    random(array) {
      return Tools.Random(array);
    },
  },
};

const textRandomizer = new Randomizer(options);

textRandomizer.render("{{random([1, 2, 3, 4])}}"); // Вернёт случайное число из массива
textRandomizer.render("{{random({a: 'avalue', b: 'bvalue'})}}"); // Вернёт случайное значение из объекта ("avalue" или "bvalue")
```

Возвращаемое значение: `any`

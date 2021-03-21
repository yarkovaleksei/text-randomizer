# Установка

### NPM

```bash
$ npm install text-randomizer
```

### Yarn

```bash
$ yarn add text-randomizer
```

### Прямая загрузка / CDN

https://unpkg.com/text-randomizer/dist/text-randomizer.js

[unpkg.com](https://unpkg.com) предоставляет ссылки на CDN на основе NPM. Вышеуказанная ссылка всегда указывает на последнюю версию NPM пакета. Вы также можете использовать конкретную версию/тег через URL-адрес, например https://unpkg.com/text-randomizer@{{book.packageVersion}}/dist/text-randomizer.js

Подключите text-randomizer и используйте согласно документации:

```html
<script src="https://unpkg.com/text-randomizer/dist/text-randomizer.js"></script>
<script>
  const textRandomizer = new Randomizer();
</script>
```

Если вы используете сборщики типа webpack, rollup и т.п., то вам подойдёт такой вариант:

```javascript
import { Randomizer } from 'text-randomizer';

const textRandomizer = new Randomizer();
```

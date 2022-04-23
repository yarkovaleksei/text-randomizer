import { Tools } from './Tools';
import { RandomizerOptions } from '.';

function mergeDeep(target: RandomizerOptions, source: RandomizerOptions = {}) {
  const isObject = (obj: RandomizerOptions) => obj && typeof obj === 'object';

  if (!isObject(target) || !isObject(source)) {
    return source;
  }

  Object.keys(source).forEach(key => {
    const targetValue = target[key];
    const sourceValue = source[key];

    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      target[key] = targetValue.concat(sourceValue);
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      target[key] = mergeDeep(Object.assign({}, targetValue), sourceValue);
    } else {
      target[key] = sourceValue;
    }
  });

  return target;
}

/**
 * @description Основной класс пакета. Предоставляет интерфейс для конфигурирования и рендеринга шаблона текста.
 * @export
 * @class Randomizer
 */
export class Randomizer {
  /**
   * @description Конфигурация по-умолчанию.
   * Расширяется при создании экземпляра класса либо методом setOptions.
   * @private
   * @type {RandomizerOptions}
   * @memberof Randomizer
   */
  private options: RandomizerOptions = {

    tags: {
      open: '{{',
      close: '}}',
    },
    actions: {
      number(min: number, max: number): number {
        return Tools.Number(min, max);
      },
      choice(array: any[] | Record<string, any>, num: number, mode: boolean): string | string[] {
        return Tools.Choice(array, num, mode);
      },
      random(array: any[] | Record<string, any>): string | string[] {
        return Tools.Random(array);
      },
    },
  };

  /**
   * Конструктор класса Randomizer.
   * @param {RandomizerOptions} [options={}]
   * @memberof Randomizer
   */
  constructor(options: RandomizerOptions = {}) {
    this.setOptions(options);
  }

  /**
   * @description Метод расширяет конфигурацию с помощью переданного объекта настроек.
   * @param {RandomizerOptions} options
   * @memberof Randomizer
   */
  public setOptions(options: RandomizerOptions): void {
    if(!options || typeof options !== 'object') {
      throw new TypeError('Options must be a object');
    }

    this.options = mergeDeep(this.options, options);
  }

  /**
   * @description Метод обрабатывает шаблон, содержащий вставки вида {{action_name()}}, и возвращает строку с измененными данными.
   * @param {string} template Строка со вставками вида {{action_name()}}
   * @returns {string}
   * @example
   * import { Randomizer, Tools } from 'text-randomizer';
   *
   * const randomizer = new Randomizer();
   * const options = {
   *     tags: {
   *         open: "[[",
   *         close: "]]"
   *     },
   *     actions: {
   *        number(min, max) {
   *            return Tools.Number(min, max);
   *        },
   *        choice(array, num, mode) {
   *            return Tools.Choice(array, num, mode);
   *        }
   *     }
   * }
   * randomizer.setOptions(options);
   * const template = "Random int: [[number(1, 10)]]. Random array value: [[choice(['one', 'two', 'three'], 1, true)]].";
   * const result = randomizer.render(template);
   * console.log(result); // Random int: 5. Random array value: one.
   * @memberof Randomizer
   */
  public render(template: string): string {
    if(typeof template !== 'string') {
      throw new TypeError('Template must be a string');
    }

    const openTag = '\\' + this.options.tags.open.split('').join('\\');
    const closeTag = '\\' + this.options.tags.close.split('').join('\\');
    const searchRegexp = new RegExp(`${openTag}(.+?)${closeTag}`, 'g');
    const occurrences = template.match(searchRegexp);

    if (occurrences && occurrences.length) {
      for (let i = 0, len = occurrences.length; i < len; i++) {
        const action = occurrences[i]
          .replace(this.options.tags.open, '')
          .replace(this.options.tags.close, '')
          .trim();
        let result = '';

        if (action.match(/\((.*)\)/)) {
          result = eval(`this.options.actions.${action}`);
        } else {
          if (this.options.actions[action]) {
            result = this.options.actions[action]();
          } else {
            result = occurrences[i];
          }
        }

        template = template.replace(occurrences[i], result);
      }
    }

    return template;
  }
}

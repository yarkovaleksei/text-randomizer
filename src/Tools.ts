export class Tools {
  /**
   * @description Метод возвращает случайное число в заданном диапазоне
   * @static
   * @param {number} [min=0] Минимальная граница диапазона
   * @param {number} [max=1] Максимальная граница диапазона
   * @returns {number}
   * @example
   * const randInt = Tools.Number(1, 10);
   * console.log(randInt); // Число от 1 до 10 включительно
   * const randInt = Tools.Number();
   * console.log(randInt); // 0 или 1
   * @memberof Tools
   */
  static Number(min = 0, max = 1): number {
    const $min = (min && typeof(min) === 'number') ? min : 0;
    const $max = (max && typeof(max) === 'number') ? max : 1;

    return Math.floor(Math.random() * ($max - $min)) + $min + 1;
  }

  /**
   * @description Метод возвращает случайный индекс коллекции array.
   * Если передан аргумент num, то вернется массив случайных
   * индексов коллекции array в количестве num элементов.
   * @static
   * @param {(any[] | Record<string, any>)} array Коллекция элементов (Array или Object)
   * @param {number} [num=1] Количество случайных индексов коллекции. По-умолчанию 1.
   * @param {boolean} [mode=false] Если true, то вернется не индекс, а значение элемента массива. По-умолчанию false.
   * @returns {(string | string[])}
   * @example
   * const arr = ["one", "two", "three", "four"];
   * const obj = {a: "avalue", b: "bvalue"};
   * const randIndex = Tools.Choice(arr);
   * console.log(randInt); // "2"
   * const randIndex = Tools.Choice(obj);
   * console.log(randInt); // "a"
   * const randIndexes = Tools.Choice(arr, 2);
   * console.log(randInt); // ["1", "3"]
   * const randIndexes = Tools.Choice(obj, 2);
   * console.log(randInt); // ["a", "b"]
   * const randValue = Tools.Choice(arr, 1, true);
   * console.log(randValue); // "three"
   * const randValues = Tools.Choice(obj, 1, true);
   * console.log(randValue); // "avalue"
   * @memberof Tools
   */
  static Choice(array: any[] | Record<string, any>, num = 1, mode = false): string | string[] {
    const keys = Object.keys(array);

    if (isNaN(num) || num < 1) {
      num = 1;
    } else if(num > keys.length) {
      num = keys.length;
    }

    for (let i = 0; i < keys.length; i++) {
      const random = Math.floor(Math.random() * (i + 1));
      const tmp = keys[random];

      keys[random] = keys[i];
      keys[i] = tmp;
    }

    if (mode === false) {
      return (num === 1 ? keys[0] : keys.slice(0, num));
    }

    if (num === 1) {
      return array[keys[0]];
    }

    let $keys = keys.slice(0, num);
    const tmp = [];

    while ($keys.length) {
      let $key = $keys.shift();

      tmp.push(array[$key]);
      $key = null;
    }

    $keys = null;

    return tmp;
  }

  /**
   * @description Метод возвращает случайный элемент коллекции array.
   * @static
   * @param {(any[] | Record<string, any>)} array Коллекция элементов (Array или Object)
   * @returns {(string | string[])}
   * @example
   * const arr = ["one", "two", "three", "four"];
   * const obj = {a: "avalue", b: "bvalue"};
   * const randValue = Tools.Random(arr);
   * console.log(randValue); // "three"
   * const randValues = Tools.Random(obj);
   * console.log(randValue); // "bvalue"
   * @memberof Tools
   */
  static Random(array: any[] | Record<string, any>): string | string[] {
    return Tools.Choice(array, 1, true);
  }
}

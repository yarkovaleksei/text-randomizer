import { Tools } from '../../src/Tools';

describe('Tools', () => {
  describe('Method "Number"', () => {
    it('return number between 0 and 1 if been called without options', (done) => {
      const rand = Tools.Number();
      expect(rand >= 0 && rand <= 1).toEqual(true);
      done();
    });

    it('return number between 1 and 100', (done) => {
      const rand = Tools.Number(1, 100);
      expect(rand >= 1 && rand <= 100).toEqual(true);
      done();
    });
  });

  describe('Method "Choice"', () => {
    describe('from Array"', () => {
      const array = ["one", "two", "three", "four"];

      it('return random index as string', (done) => {
        const rand = Tools.Choice(array);
        expect(typeof rand).toEqual('string');
        expect(Number(rand) < array.length).toEqual(true);
        done();
      });

      it('return random indexes as array of string', (done) => {
        const rands = Tools.Choice(array, 2);
        expect(Array.isArray(rands)).toEqual(true);
        expect(Number(rands[0]) < array.length).toEqual(true);
        expect(Number(rands[1]) < array.length).toEqual(true);
        expect(rands[0] !== rands[1]).toEqual(true);
        expect((rands as string[]).filter(i => typeof i === 'string').length).toEqual(rands.length);
        done();
      });

      it('return one of values as string', (done) => {
        const rand = Tools.Choice(array, 1, true);
        expect(typeof rand).toEqual('string');
        expect(array.includes(rand as string)).toEqual(true);
        done();
      });

      it('return random values as array of string', (done) => {
        const rands = Tools.Choice(array, 2, true);
        expect(Array.isArray(rands)).toEqual(true);
        expect(array.includes(rands[0] as string)).toEqual(true);
        expect(array.includes(rands[1] as string)).toEqual(true);
        expect(rands[0] !== rands[1]).toEqual(true);
        expect((rands as string[]).filter(i => typeof i === 'string').length).toEqual(rands.length);
        done();
      });
    });

    describe('from Object"', () => {
      const obj = {a: "avalue", b: "bvalue", c: "cvalue"};

      it('return random key as string', (done) => {
        const rand = Tools.Choice(obj);
        expect(typeof rand).toEqual('string');
        expect(Object.keys(obj).includes(rand as string)).toEqual(true);
        done();
      });

      it('return random indexes as array of string', (done) => {
        const rands = Tools.Choice(obj, 2);
        expect(Array.isArray(rands)).toEqual(true);
        expect(Object.keys(obj).includes(rands[0] as string)).toEqual(true);
        expect(Object.keys(obj).includes(rands[1] as string)).toEqual(true);
        expect(rands[0] !== rands[1]).toEqual(true);
        expect((rands as string[]).filter(i => typeof i === 'string').length).toEqual(rands.length);
        done();
      });

      it('return one of values as string', (done) => {
        const rand = Tools.Choice(obj, 1, true);
        expect(typeof rand).toEqual('string');
        expect(Object.values(obj).includes(rand as string)).toEqual(true);
        done();
      });

      it('return random values as array of string', (done) => {
        const rands = Tools.Choice(obj, 2, true);
        expect(Array.isArray(rands)).toEqual(true);
        expect(Object.values(obj).includes(rands[0] as string)).toEqual(true);
        expect(Object.values(obj).includes(rands[1] as string)).toEqual(true);
        expect(rands[0] !== rands[1]).toEqual(true);
        expect((rands as string[]).filter(i => typeof i === 'string').length).toEqual(rands.length);
        done();
      });
    });
  });

  describe('Method "Random""', () => {
    describe('from Array"', () => {
      const array = ["one", "two", "three", "four"];

      it('return one of values as string', (done) => {
        const rand = Tools.Random(array);
        expect(typeof rand).toEqual('string');
        expect(array.includes(rand as string)).toEqual(true);
        done();
      });
    });

    describe('from Object"', () => {
      const obj = {a: "avalue", b: "bvalue", c: "cvalue"};

      it('return one of values as string', (done) => {
        const rand = Tools.Random(obj);
        expect(typeof rand).toEqual('string');
        expect(Object.values(obj).includes(rand as string)).toEqual(true);
        done();
      });
    });
  });
});

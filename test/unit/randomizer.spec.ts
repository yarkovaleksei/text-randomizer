import { Randomizer, RandomizerOptions } from '../../src';

describe('Randomizer', () => {
  describe('Create instance', () => {
    it('without options', (done) => {
      const randomizer = new Randomizer();
      expect(randomizer instanceof Randomizer).toEqual(true);
      done();
    });

    it('with options', (done) => {
      const options: RandomizerOptions = {
        tags: {
          open: '<<',
          close: '>>',
        },
      };
      const randomizer = new Randomizer(options);
      expect(randomizer.render('<<random([1])>>')).toEqual('1');
      done();
    });
  });

  describe('Method "setOptions"', () => {
    it('throw Error if been called without options', (done) => {
      const randomizer = new Randomizer();
      expect(() => randomizer.setOptions(null)).toThrow(TypeError);
      done();
    });

    it('may be called with options', (done) => {
      const options: RandomizerOptions = {
        tags: {
          open: '<<',
          close: '>>',
        },
      };
      const randomizer = new Randomizer();
      randomizer.setOptions(options);
      expect(randomizer.render('<<random([1])>>')).toEqual('1');
      done();
    });
  });

  describe('Method "render"', () => {
    it('throw Error if been called without options', (done) => {
      const randomizer = new Randomizer();
      expect(() => randomizer.render(null)).toThrow(TypeError);
      done();
    });

    it('may be called with options', (done) => {
      const randomizer = new Randomizer();
      expect(randomizer.render('{{random([1])}}')).toEqual('1');
      done();
    });
  });
});

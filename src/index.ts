import { Randomizer } from './Randomizer';
import { Tools } from './Tools';

export interface RandomizerOptions {
  tags?: {
    open?: string
    close?: string
  }
  actions?: {
    number?: typeof Tools.Number
    choice?: typeof Tools.Choice
    random?: typeof Tools.Random
  }
}

if (typeof window !== 'undefined') {
  window['Randomizer'] = Randomizer;
  window['Tools'] = Tools;
}

export { Randomizer, Tools };

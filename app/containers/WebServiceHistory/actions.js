import { SELECTION } from './constants';

export function select(item) {
  return {
    type: SELECTION,
    item
  }
}


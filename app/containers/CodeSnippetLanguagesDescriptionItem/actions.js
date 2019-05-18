import { SELECTION } from './constants';

export function selectCodeSnippet(codeSnippet) {
  return {
    type: SELECTION,
    codeSnippet,
  };
}

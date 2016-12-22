export const INCREASE_ENGLISH_COUNT = 'INCREASE_ENGLISH_COUNT';
export const DECREASE_ENGLISH_COUNT = 'DECREASE_ENGLISH_COUNT';

export const INCREASE_SPANISH_COUNT = 'INCREASE_SPANISH_COUNT';
export const DECREASE_SPANISH_COUNT = 'DECREASE_SPANISH_COUNT';

export function increaseEnglish() {
  return {
    type: INCREASE_ENGLISH_COUNT
  };
}

export function decreaseEnglish() {
  return {
    type: DECREASE_ENGLISH_COUNT
  };
}

export function increaseSpanish() {
  return {
    type: INCREASE_SPANISH_COUNT
  };
}

export function decreaseSpanish() {
  return {
    type: DECREASE_SPANISH_COUNT
  };
}
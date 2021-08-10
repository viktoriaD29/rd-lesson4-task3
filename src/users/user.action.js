export const GONEXT = 'USERS/GONEXT'
export const GOPREV = 'USERS/GOPREV';

export const goNext = () => {
  return {
    type: GONEXT,
  };
}

export const goPrev = () => {
  return {
    type: GOPREV,
  };
};
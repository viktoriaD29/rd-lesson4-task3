export const GONEXT = 'USERSLIST/GONEXT';
export const GOPREV = 'USERSLIST/GOPREV';

export const goNext = () => {
  return {
    type: GONEXT,
  };
};

export const goPrev = () => {
  return {
    type: GOPREV,
  };
};

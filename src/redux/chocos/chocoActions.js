export const BUY_CHOCOS = "BUY_CHOCOS";
export const RESET = "RESET";



export const buyChocos = (qty) => {
  return {
    type: BUY_CHOCOS,
    info: "It reduces no of CHOCOS in shop",
    payload:qty
  };
};

export const reset = () => {
  return {
    type: RESET,
    info: "It resets the conditions",
  };
};

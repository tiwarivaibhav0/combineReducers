export const BUY_ICECREAM = "BUY_ICECREAM";
export const RESET = "RESET";



export const buyIcecream = (qty) => {
  return {
    type: BUY_ICECREAM,
    info: "It reduces no of ICECREAM in shop",
    payload:qty
  };
};

export const reset = () => {
  return {
    type: RESET,
    info: "It resets the conditions",
  };
};

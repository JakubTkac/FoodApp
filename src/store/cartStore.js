import create from "zustand";
var _ = require("lodash");

export const useStore = create((set) => ({
  cartList: [],
  yourCartValue: 0,

  updateYourCartValue: () =>
    set((prevState) => {
      return {
        yourCartValue: _.sum(
          prevState.cartList.map((cart) => {
            return cart.amount;
          })
        ),
      };
    }),

  addToCart: (object) =>
    set((prevState) => {
      return {
        cartList: [...prevState.cartList, object],
      };
    }),

  updateAmountInCart: (newAmount, itemID) => {
    return set((prevState) => ({
      cartList: [
        ...prevState.cartList.map((cartItem) => {
          if (cartItem.id === itemID) {
            return {
              ...cartItem,
              amount: (cartItem.amount += newAmount),
            };
          } else {
            return { ...cartItem };
          }
        }),
      ],
    }));
  },

  minusOne: (itemID) => {
    return set((prevState) => ({
      cartList: [
        ...prevState.cartList
          .filter((cartItem) => {
            return cartItem.amount > 0;
          })
          .map((cartItem) => {
            if (cartItem.id === itemID && cartItem.amount !== 0) {
              return {
                ...cartItem,
                amount: (cartItem.amount -= 1),
              };
            } else {
              return { ...cartItem };
            }
          }),
      ],
    }));
  },

  plusOne: (itemID) => {
    return set((prevState) => ({
      cartList: [
        ...prevState.cartList.map((cartItem) => {
          if (cartItem.id === itemID) {
            return {
              ...cartItem,
              amount: (cartItem.amount += 1),
            };
          } else {
            return { ...cartItem };
          }
        }),
      ],
    }));
  },
}));

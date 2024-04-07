import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],
  message: "",
  addToCart: (gameToAdd) => {
    set((state) => {
  //* Check if the game is already in cart. If yes then no need to add again, if not, then add it
   //? some() method returns true if atleast one element in the array satisfies the given condition.
      const isGameInCart = state.cart.some((game) => game.id === gameToAdd.id);
      if (isGameInCart) {
        return {
          cart: state.cart,
          message: "This item is already in your cart.",
        };
      }
      return {
        cart: [...state.cart, gameToAdd],
        message: "Item added to cart.",
      };
    });
  },
  removeFromCart: (id) =>
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.id !== id);
      const message =
        updatedCart.length < state.cart.length
          ? "Item removed from cart"
          : "No item to remove";
      return { cart: updatedCart, message };
    }),
  emptyCart: () => set({ cart: [], message: "Cart cleared." }),
}));

export default useCartStore;

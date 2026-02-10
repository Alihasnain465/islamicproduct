export type CartItem = {
  name: string;
  price: number;
  quantity: number;
  image: string;
};

// Add product to cart
export const addToCart = (product: CartItem) => {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");

  const existing = cart.find((item: CartItem) => item.name === product.name);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

// Get all cart items
export const getCart = (): CartItem[] => {
  return JSON.parse(localStorage.getItem("cart") || "[]");
};

// Remove item from cart
export const removeFromCart = (name: string) => {
  const cart = getCart().filter((item) => item.name !== name);
  localStorage.setItem("cart", JSON.stringify(cart));
};
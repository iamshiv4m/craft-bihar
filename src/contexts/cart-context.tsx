"use client";

import { createContext, useContext, useState, useCallback } from "react";
import type { Product } from "@/types/product";

type CartItem = Product & { quantity: number };
type WishlistItem = Product;

interface CartContextType {
  cart: CartItem[];
  wishlist: WishlistItem[];
  addToCart: (product: Omit<Product, "createdAt" | "updatedAt">) => void;
  removeFromCart: (productId: string) => void;
  addToWishlist: (product: Omit<Product, "createdAt" | "updatedAt">) => void;
  removeFromWishlist: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  clearWishlist: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  const addToCart = useCallback(
    (product: Omit<Product, "createdAt" | "updatedAt">) => {
      setCart((prevCart) => {
        const existingItem = prevCart.find((item) => item.id === product.id);
        if (existingItem) {
          return prevCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        return [...prevCart, { ...product, quantity: 1 }];
      });
    },
    []
  );

  const removeFromCart = useCallback((productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  }, []);

  const addToWishlist = useCallback(
    (product: Omit<Product, "createdAt" | "updatedAt">) => {
      setWishlist((prevWishlist) => {
        if (prevWishlist.some((item) => item.id === product.id)) {
          return prevWishlist;
        }
        return [...prevWishlist, product];
      });
    },
    []
  );

  const removeFromWishlist = useCallback((productId: string) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== productId)
    );
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const clearWishlist = useCallback(() => {
    setWishlist([]);
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        addToWishlist,
        removeFromWishlist,
        updateQuantity,
        clearCart,
        clearWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

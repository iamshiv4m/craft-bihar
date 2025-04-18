"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import type { Product } from "@/types/product";
import { useCart } from "@/contexts/cart-context";
import { toast } from "sonner";

type ProductCardProps = Readonly<
  Pick<Product, "id" | "name" | "price" | "images" | "category">
>;

export function ProductCard({
  id,
  name,
  price,
  images,
  category,
}: ProductCardProps) {
  const { addToCart, addToWishlist, wishlist, removeFromWishlist } = useCart();
  const isInWishlist = wishlist.some((item) => item.id === id);

  const handleAddToCart = () => {
    addToCart({ id, name, price, images, category });
    toast.success("Added to cart!");
  };

  const handleWishlist = () => {
    if (isInWishlist) {
      removeFromWishlist(id);
      toast.success("Removed from wishlist");
    } else {
      addToWishlist({ id, name, price, images, category });
      toast.success("Added to wishlist!");
    }
  };

  return (
    <Card className="group overflow-hidden">
      <CardHeader className="p-0">
        <Link href={`/products/${id}`}>
          <div className="aspect-square relative overflow-hidden">
            <Image
              src={images[0]}
              alt={name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="p-4">
        <Link href={`/products/${id}`}>
          <h3 className="font-medium text-lg truncate hover:text-orange-600">
            {name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground">{category}</p>
        <p className="text-lg font-semibold mt-2">
          ₹{price.toLocaleString("en-IN")}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button className="w-4/5" onClick={handleAddToCart}>
          Add to Cart
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={handleWishlist}
          className={isInWishlist ? "text-red-500" : ""}
        >
          <Heart className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}

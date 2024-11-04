"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any; // Check if this is an array or a single image object
  price_id:string;
}

export default function AddToBag({ currency, description, image, name, price, price_id }: ProductCart) {
  const { addItem, handleCartClick } = useShoppingCart();

  // If `image` is an array, use the first image
  const imageUrl = Array.isArray(image) ? urlFor(image[0]).url() : urlFor(image).url();

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: imageUrl,
    price_id: price_id,
  };

  return (
    <Button
      onClick={() => {
        addItem(product);
        handleCartClick();
      }}
    >
      Add To Cart
    </Button>
  );
}

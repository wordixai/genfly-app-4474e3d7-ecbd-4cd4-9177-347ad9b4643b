import React from "react";
import { Product } from "@/types/product";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const { name, description, price, imageUrl, rating, inStock, discount, category } = product;
  
  const discountedPrice = discount ? price * (1 - discount / 100) : price;
  
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {discount && (
          <Badge variant="destructive" className="absolute top-2 right-2">
            {discount}% OFF
          </Badge>
        )}
        <Badge variant="secondary" className="absolute top-2 left-2">
          {category}
        </Badge>
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{name}</CardTitle>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="text-sm">{rating}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
      </CardContent>
      
      <CardFooter className="flex justify-between items-center pt-4 border-t">
        <div>
          {discount ? (
            <div className="flex flex-col">
              <span className="text-lg font-bold">${discountedPrice.toFixed(2)}</span>
              <span className="text-sm text-muted-foreground line-through">${price.toFixed(2)}</span>
            </div>
          ) : (
            <span className="text-lg font-bold">${price.toFixed(2)}</span>
          )}
        </div>
        
        <Button 
          onClick={() => onAddToCart(product)} 
          disabled={!inStock}
          variant={inStock ? "default" : "outline"}
          size="sm"
        >
          {inStock ? (
            <>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </>
          ) : (
            "Out of Stock"
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
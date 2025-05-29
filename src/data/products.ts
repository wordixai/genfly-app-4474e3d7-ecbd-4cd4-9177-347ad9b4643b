import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
    price: 199.99,
    category: "Electronics",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
    rating: 4.8,
    inStock: true,
    discount: 15
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    description: "Track your fitness goals with this advanced smartwatch featuring heart rate monitoring and GPS.",
    price: 149.99,
    category: "Wearables",
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop",
    rating: 4.5,
    inStock: true
  },
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    description: "Comfortable and eco-friendly t-shirt made from 100% organic cotton.",
    price: 29.99,
    category: "Clothing",
    imageUrl: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop",
    rating: 4.3,
    inStock: true,
    discount: 10
  },
  {
    id: 4,
    name: "Professional Camera Lens",
    description: "High-performance camera lens for professional photography with superior image quality.",
    price: 599.99,
    category: "Photography",
    imageUrl: "https://images.unsplash.com/photo-1617005082133-45b311577259?q=80&w=1974&auto=format&fit=crop",
    rating: 4.9,
    inStock: false
  },
  {
    id: 5,
    name: "Ergonomic Office Chair",
    description: "Comfortable office chair with lumbar support and adjustable features for long working hours.",
    price: 249.99,
    category: "Furniture",
    imageUrl: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=2000&auto=format&fit=crop",
    rating: 4.7,
    inStock: true,
    discount: 20
  }
];
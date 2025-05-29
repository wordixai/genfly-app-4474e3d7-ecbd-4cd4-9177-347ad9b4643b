import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import ProductList from "@/components/ProductList";
import { products } from "@/data/products";
import { Product } from "@/types/product";

const Index: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  
  const handleAddToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar cartItemCount={cartItems.length} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to ShopZone</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Discover amazing products at unbeatable prices. Shop now and enjoy free shipping on all orders!
          </p>
          <a 
            href="#products" 
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-md hover:bg-blue-50 transition-colors"
          >
            Browse Products
          </a>
        </div>
      </section>
      
      {/* Products Section */}
      <section id="products" className="py-12 bg-gray-50">
        <ProductList products={products} />
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-bold mb-4">ShopZone</h2>
              <p className="text-gray-300 max-w-xs">
                Your one-stop shop for all your shopping needs. Quality products at affordable prices.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Shop</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-white">All Products</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">New Arrivals</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Featured</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Discounts</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Support</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-white">FAQ</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Shipping</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Returns</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} ShopZone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
import Product from "./models/Product";

export const products: Product[] = [
  { name: "Jo Malone", price: 70 },
  { name: "Marc Jacobs", price: 65 },
  { name: "Guerlain", price: 90 },
];

export const calcAverageProductPrice = (products: Product[]): number =>{
    if (products.length === 0) {
        return 0; 
      }
    
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += products[i].price;
    }
  
    return total / products.length;
    
};
import InventoryItem from "./models/InventoryItem";

export const inventory: InventoryItem[] = [
    { 
        product: {
            name: "motor",
            price: 10.00
        },
      quantity: 10,
      
    },
    {
        product: {
            name: "sensor",
            price: 12.50,
        },
      
      quantity: 4,
    },
    {
        product:{
            name: "LED",
            price: 1.00,      
        },
      quantity: 20,
    },
  ];

  export const calcInventoryValue = (inventory: InventoryItem[]): number => {
    if (inventory.length === 0) {
        return 0;
    }
    let total = 0;

    for (const item of inventory) {
        //obj inside an obj, inventory item obj has a prod obj inside
      total += item.product.price * item.quantity;
    }
  
    return total;
  };

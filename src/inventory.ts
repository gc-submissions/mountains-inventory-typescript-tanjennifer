import InventoryItem from "./models/InventoryItem";

export const inventory: InventoryItem[] = [
    {
      name: "motor",
      price: 10.00,
      quantity: 10,
    },
    {
      name: "sensor",
      price: 12.50,
      quantity: 4,
    },
    {
      name: "LED",
      price: 1.00,
      quantity: 20,
    },
  ];

  export const calcInventoryValue = (inventory: InventoryItem[]): number => {
    if (inventory.length === 0) {
        return 0;
    }
    let total = 0;

    for (const item of inventory) {
      total += item.price * item.quantity;
    }
  
    return total;
  };

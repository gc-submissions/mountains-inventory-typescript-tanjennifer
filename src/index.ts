import './mountains';
import './products';
import './inventory';
import { findNameOfTallestMountain, mountains} from "./mountains";
import { products, calcAverageProductPrice } from "./products";
import { inventory, calcInventoryValue } from "./inventory";

// // manual testing (console log)

const result = findNameOfTallestMountain(mountains);
console.log(result);

const result2 = calcAverageProductPrice(products);
console.log(result2);

const result3 = calcInventoryValue(inventory);
console.log(result3);
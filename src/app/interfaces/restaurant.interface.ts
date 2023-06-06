/**
 * Restaurant Interface
 */

import { Inventory, InventoryItem, Store } from "./store.interface";

/**
 * Restaurant Interface
 */
export interface Restaurant extends Store {
    ratings: string[] | undefined;
    inventory: RestaurantInventory;
}

/**
 * Restaurant Inventory Interface
 */
export interface RestaurantInventory extends Inventory {
    items: RestaurantItem[];
}

/**
 * Restaurant Item Interface
 */
export interface RestaurantItem extends InventoryItem {
    images: string[];
}
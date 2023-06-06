/**
 * Restaurant Interfaces
 */

import { Store, Inventory, InventoryItem } from "./store.interface";

/**
 * Restaurant Interface
 */
export interface Restaurant extends Store {
    ratings: string[]; // TODO: Rating[]
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
    images: string[]; // TODO: Image[]
}
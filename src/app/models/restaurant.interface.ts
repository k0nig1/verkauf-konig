/**
 * Restaurant Interface
 */
export interface RestaurantInterface {
    id: string;
    name: string;
    inventory: RestaurantInventoryInterface | null;
}

/**
 * Restaurant Inventory Interface
 */
export interface RestaurantInventoryInterface {
    id: string;
    items: RestaurantItemInterface[] | null;
}

/**
 * Restaurant Item Interface
 */
export interface RestaurantItemInterface {
    id: string;
    name: string;
    description: RestaurantItemDescriptionInterface | null;
}

/**
 * Restaurant Item Interface
 */
export interface RestaurantItemDescriptionInterface {
    id: string;
}
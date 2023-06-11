/**
 * Restaurant Interface
 */
export interface RestaurantInterface {
    id: any;
    name: string;
    inventory: RestaurantInventoryInterface | null;
}

/**
 * Restaurant Inventory Interface
 */
export interface RestaurantInventoryInterface {
    id: any;
    items: RestaurantItemInterface[] | null;
}

/**
 * Restaurant Item Interface
 */
export interface RestaurantItemInterface {
    id: any;
    name: string;
    description: RestaurantItemDescriptionInterface | null;
}

/**
 * Restaurant Item Interface
 */
export interface RestaurantItemDescriptionInterface {
    id: any;
}
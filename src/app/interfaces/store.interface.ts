/**
 * Generic Store Interfaces
 */

/**
 * Store Interface
 */
export interface Store {
    id: string;
    name: string;
    address: string;
    phone: string;
    socialMediaLinks: string[];
    images: string[];
    inventory: Inventory;
}

/**
 * Inventory Interface
 */
export interface Inventory {
    items: InventoryItem[];
}

/**
 * InventoryItem Interface
 */
export interface InventoryItem {
    id: string;
    name: string;
    description: string;
    category: string;
}



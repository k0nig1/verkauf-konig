export class RestaurantMenu {
    restaurantName: string;
    menuItem$: MenuItem[] | undefined;

    constructor(restaurantName: string) {
        this.restaurantName = restaurantName;
    }
}

class MenuItem {
    headline: string | undefined;
    description: string | undefined;
    image: string | undefined;
}
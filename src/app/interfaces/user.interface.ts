/**
 * User Interfaces
 */

/**
 * Generic User Interface
 */
export interface User {
    firstName: string;
    lastName: string;
    preferredAlias: string;
    since: Date;
    lastLoggedIn: Date;
    history: string[];
}
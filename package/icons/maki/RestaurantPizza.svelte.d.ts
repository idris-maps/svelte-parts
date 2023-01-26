import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        inline?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type RestaurantPizzaProps = typeof __propDef.props;
export type RestaurantPizzaEvents = typeof __propDef.events;
export type RestaurantPizzaSlots = typeof __propDef.slots;
export default class RestaurantPizza extends SvelteComponentTyped<RestaurantPizzaProps, RestaurantPizzaEvents, RestaurantPizzaSlots> {
}
export {};

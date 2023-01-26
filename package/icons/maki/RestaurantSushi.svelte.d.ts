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
export type RestaurantSushiProps = typeof __propDef.props;
export type RestaurantSushiEvents = typeof __propDef.events;
export type RestaurantSushiSlots = typeof __propDef.slots;
export default class RestaurantSushi extends SvelteComponentTyped<RestaurantSushiProps, RestaurantSushiEvents, RestaurantSushiSlots> {
}
export {};

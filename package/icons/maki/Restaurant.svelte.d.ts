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
export type RestaurantProps = typeof __propDef.props;
export type RestaurantEvents = typeof __propDef.events;
export type RestaurantSlots = typeof __propDef.slots;
export default class Restaurant extends SvelteComponentTyped<RestaurantProps, RestaurantEvents, RestaurantSlots> {
}
export {};

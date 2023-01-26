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
export type RestaurantSeafoodProps = typeof __propDef.props;
export type RestaurantSeafoodEvents = typeof __propDef.events;
export type RestaurantSeafoodSlots = typeof __propDef.slots;
export default class RestaurantSeafood extends SvelteComponentTyped<RestaurantSeafoodProps, RestaurantSeafoodEvents, RestaurantSeafoodSlots> {
}
export {};

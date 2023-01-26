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
export type RestaurantBbqProps = typeof __propDef.props;
export type RestaurantBbqEvents = typeof __propDef.events;
export type RestaurantBbqSlots = typeof __propDef.slots;
export default class RestaurantBbq extends SvelteComponentTyped<RestaurantBbqProps, RestaurantBbqEvents, RestaurantBbqSlots> {
}
export {};

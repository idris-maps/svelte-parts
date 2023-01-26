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
export type RestaurantNoodleProps = typeof __propDef.props;
export type RestaurantNoodleEvents = typeof __propDef.events;
export type RestaurantNoodleSlots = typeof __propDef.slots;
export default class RestaurantNoodle extends SvelteComponentTyped<RestaurantNoodleProps, RestaurantNoodleEvents, RestaurantNoodleSlots> {
}
export {};

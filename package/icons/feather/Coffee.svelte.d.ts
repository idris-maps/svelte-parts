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
export type CoffeeProps = typeof __propDef.props;
export type CoffeeEvents = typeof __propDef.events;
export type CoffeeSlots = typeof __propDef.slots;
export default class Coffee extends SvelteComponentTyped<CoffeeProps, CoffeeEvents, CoffeeSlots> {
}
export {};

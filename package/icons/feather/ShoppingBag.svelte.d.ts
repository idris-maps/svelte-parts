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
export type ShoppingBagProps = typeof __propDef.props;
export type ShoppingBagEvents = typeof __propDef.events;
export type ShoppingBagSlots = typeof __propDef.slots;
export default class ShoppingBag extends SvelteComponentTyped<ShoppingBagProps, ShoppingBagEvents, ShoppingBagSlots> {
}
export {};

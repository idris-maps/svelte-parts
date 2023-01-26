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
export type ShoppingCartProps = typeof __propDef.props;
export type ShoppingCartEvents = typeof __propDef.events;
export type ShoppingCartSlots = typeof __propDef.slots;
export default class ShoppingCart extends SvelteComponentTyped<ShoppingCartProps, ShoppingCartEvents, ShoppingCartSlots> {
}
export {};

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
export type ShopProps = typeof __propDef.props;
export type ShopEvents = typeof __propDef.events;
export type ShopSlots = typeof __propDef.slots;
export default class Shop extends SvelteComponentTyped<ShopProps, ShopEvents, ShopSlots> {
}
export {};

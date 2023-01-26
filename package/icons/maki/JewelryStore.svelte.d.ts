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
export type JewelryStoreProps = typeof __propDef.props;
export type JewelryStoreEvents = typeof __propDef.events;
export type JewelryStoreSlots = typeof __propDef.slots;
export default class JewelryStore extends SvelteComponentTyped<JewelryStoreProps, JewelryStoreEvents, JewelryStoreSlots> {
}
export {};

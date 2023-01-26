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
export type WasteBasketProps = typeof __propDef.props;
export type WasteBasketEvents = typeof __propDef.events;
export type WasteBasketSlots = typeof __propDef.slots;
export default class WasteBasket extends SvelteComponentTyped<WasteBasketProps, WasteBasketEvents, WasteBasketSlots> {
}
export {};

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
export type AlcoholShopProps = typeof __propDef.props;
export type AlcoholShopEvents = typeof __propDef.events;
export type AlcoholShopSlots = typeof __propDef.slots;
export default class AlcoholShop extends SvelteComponentTyped<AlcoholShopProps, AlcoholShopEvents, AlcoholShopSlots> {
}
export {};

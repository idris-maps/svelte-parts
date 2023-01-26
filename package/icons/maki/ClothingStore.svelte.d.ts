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
export type ClothingStoreProps = typeof __propDef.props;
export type ClothingStoreEvents = typeof __propDef.events;
export type ClothingStoreSlots = typeof __propDef.slots;
export default class ClothingStore extends SvelteComponentTyped<ClothingStoreProps, ClothingStoreEvents, ClothingStoreSlots> {
}
export {};

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
export type FurnitureProps = typeof __propDef.props;
export type FurnitureEvents = typeof __propDef.events;
export type FurnitureSlots = typeof __propDef.slots;
export default class Furniture extends SvelteComponentTyped<FurnitureProps, FurnitureEvents, FurnitureSlots> {
}
export {};

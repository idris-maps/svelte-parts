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
export type GardenProps = typeof __propDef.props;
export type GardenEvents = typeof __propDef.events;
export type GardenSlots = typeof __propDef.slots;
export default class Garden extends SvelteComponentTyped<GardenProps, GardenEvents, GardenSlots> {
}
export {};

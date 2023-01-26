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
export type WetlandProps = typeof __propDef.props;
export type WetlandEvents = typeof __propDef.events;
export type WetlandSlots = typeof __propDef.slots;
export default class Wetland extends SvelteComponentTyped<WetlandProps, WetlandEvents, WetlandSlots> {
}
export {};

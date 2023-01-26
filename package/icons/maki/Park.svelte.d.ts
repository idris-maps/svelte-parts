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
export type ParkProps = typeof __propDef.props;
export type ParkEvents = typeof __propDef.events;
export type ParkSlots = typeof __propDef.slots;
export default class Park extends SvelteComponentTyped<ParkProps, ParkEvents, ParkSlots> {
}
export {};

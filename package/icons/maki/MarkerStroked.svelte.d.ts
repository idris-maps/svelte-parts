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
export type MarkerStrokedProps = typeof __propDef.props;
export type MarkerStrokedEvents = typeof __propDef.events;
export type MarkerStrokedSlots = typeof __propDef.slots;
export default class MarkerStroked extends SvelteComponentTyped<MarkerStrokedProps, MarkerStrokedEvents, MarkerStrokedSlots> {
}
export {};

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
export type GateProps = typeof __propDef.props;
export type GateEvents = typeof __propDef.events;
export type GateSlots = typeof __propDef.slots;
export default class Gate extends SvelteComponentTyped<GateProps, GateEvents, GateSlots> {
}
export {};

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
export type LiftGateProps = typeof __propDef.props;
export type LiftGateEvents = typeof __propDef.events;
export type LiftGateSlots = typeof __propDef.slots;
export default class LiftGate extends SvelteComponentTyped<LiftGateProps, LiftGateEvents, LiftGateSlots> {
}
export {};

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
export type AlertOctagonProps = typeof __propDef.props;
export type AlertOctagonEvents = typeof __propDef.events;
export type AlertOctagonSlots = typeof __propDef.slots;
export default class AlertOctagon extends SvelteComponentTyped<AlertOctagonProps, AlertOctagonEvents, AlertOctagonSlots> {
}
export {};

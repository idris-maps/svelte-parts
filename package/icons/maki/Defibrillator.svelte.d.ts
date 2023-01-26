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
export type DefibrillatorProps = typeof __propDef.props;
export type DefibrillatorEvents = typeof __propDef.events;
export type DefibrillatorSlots = typeof __propDef.slots;
export default class Defibrillator extends SvelteComponentTyped<DefibrillatorProps, DefibrillatorEvents, DefibrillatorSlots> {
}
export {};

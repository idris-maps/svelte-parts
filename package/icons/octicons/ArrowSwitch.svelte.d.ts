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
export type ArrowSwitchProps = typeof __propDef.props;
export type ArrowSwitchEvents = typeof __propDef.events;
export type ArrowSwitchSlots = typeof __propDef.slots;
export default class ArrowSwitch extends SvelteComponentTyped<ArrowSwitchProps, ArrowSwitchEvents, ArrowSwitchSlots> {
}
export {};

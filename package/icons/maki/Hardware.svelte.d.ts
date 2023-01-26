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
export type HardwareProps = typeof __propDef.props;
export type HardwareEvents = typeof __propDef.events;
export type HardwareSlots = typeof __propDef.slots;
export default class Hardware extends SvelteComponentTyped<HardwareProps, HardwareEvents, HardwareSlots> {
}
export {};

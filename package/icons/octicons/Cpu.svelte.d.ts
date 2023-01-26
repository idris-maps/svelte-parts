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
export type CpuProps = typeof __propDef.props;
export type CpuEvents = typeof __propDef.events;
export type CpuSlots = typeof __propDef.slots;
export default class Cpu extends SvelteComponentTyped<CpuProps, CpuEvents, CpuSlots> {
}
export {};

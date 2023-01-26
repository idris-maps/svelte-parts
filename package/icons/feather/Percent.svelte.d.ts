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
export type PercentProps = typeof __propDef.props;
export type PercentEvents = typeof __propDef.events;
export type PercentSlots = typeof __propDef.slots;
export default class Percent extends SvelteComponentTyped<PercentProps, PercentEvents, PercentSlots> {
}
export {};

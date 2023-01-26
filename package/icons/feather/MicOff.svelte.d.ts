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
export type MicOffProps = typeof __propDef.props;
export type MicOffEvents = typeof __propDef.events;
export type MicOffSlots = typeof __propDef.slots;
export default class MicOff extends SvelteComponentTyped<MicOffProps, MicOffEvents, MicOffSlots> {
}
export {};

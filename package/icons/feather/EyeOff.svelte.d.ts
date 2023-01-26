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
export type EyeOffProps = typeof __propDef.props;
export type EyeOffEvents = typeof __propDef.events;
export type EyeOffSlots = typeof __propDef.slots;
export default class EyeOff extends SvelteComponentTyped<EyeOffProps, EyeOffEvents, EyeOffSlots> {
}
export {};

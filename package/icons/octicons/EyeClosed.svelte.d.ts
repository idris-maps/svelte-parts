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
export type EyeClosedProps = typeof __propDef.props;
export type EyeClosedEvents = typeof __propDef.events;
export type EyeClosedSlots = typeof __propDef.slots;
export default class EyeClosed extends SvelteComponentTyped<EyeClosedProps, EyeClosedEvents, EyeClosedSlots> {
}
export {};

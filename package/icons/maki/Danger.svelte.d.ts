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
export type DangerProps = typeof __propDef.props;
export type DangerEvents = typeof __propDef.events;
export type DangerSlots = typeof __propDef.slots;
export default class Danger extends SvelteComponentTyped<DangerProps, DangerEvents, DangerSlots> {
}
export {};

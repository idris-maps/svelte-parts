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
export type PrisonProps = typeof __propDef.props;
export type PrisonEvents = typeof __propDef.events;
export type PrisonSlots = typeof __propDef.slots;
export default class Prison extends SvelteComponentTyped<PrisonProps, PrisonEvents, PrisonSlots> {
}
export {};

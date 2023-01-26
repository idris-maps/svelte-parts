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
export type PauseProps = typeof __propDef.props;
export type PauseEvents = typeof __propDef.events;
export type PauseSlots = typeof __propDef.slots;
export default class Pause extends SvelteComponentTyped<PauseProps, PauseEvents, PauseSlots> {
}
export {};

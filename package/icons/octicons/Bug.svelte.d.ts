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
export type BugProps = typeof __propDef.props;
export type BugEvents = typeof __propDef.events;
export type BugSlots = typeof __propDef.slots;
export default class Bug extends SvelteComponentTyped<BugProps, BugEvents, BugSlots> {
}
export {};

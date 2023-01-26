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
export type StarProps = typeof __propDef.props;
export type StarEvents = typeof __propDef.events;
export type StarSlots = typeof __propDef.slots;
export default class Star extends SvelteComponentTyped<StarProps, StarEvents, StarSlots> {
}
export {};

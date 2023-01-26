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
export type FloristProps = typeof __propDef.props;
export type FloristEvents = typeof __propDef.events;
export type FloristSlots = typeof __propDef.slots;
export default class Florist extends SvelteComponentTyped<FloristProps, FloristEvents, FloristSlots> {
}
export {};

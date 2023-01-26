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
export type IterationsProps = typeof __propDef.props;
export type IterationsEvents = typeof __propDef.events;
export type IterationsSlots = typeof __propDef.slots;
export default class Iterations extends SvelteComponentTyped<IterationsProps, IterationsEvents, IterationsSlots> {
}
export {};

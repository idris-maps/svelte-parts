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
export type ReadProps = typeof __propDef.props;
export type ReadEvents = typeof __propDef.events;
export type ReadSlots = typeof __propDef.slots;
export default class Read extends SvelteComponentTyped<ReadProps, ReadEvents, ReadSlots> {
}
export {};

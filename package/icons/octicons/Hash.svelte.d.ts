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
export type HashProps = typeof __propDef.props;
export type HashEvents = typeof __propDef.events;
export type HashSlots = typeof __propDef.slots;
export default class Hash extends SvelteComponentTyped<HashProps, HashEvents, HashSlots> {
}
export {};

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
export type BellProps = typeof __propDef.props;
export type BellEvents = typeof __propDef.events;
export type BellSlots = typeof __propDef.slots;
export default class Bell extends SvelteComponentTyped<BellProps, BellEvents, BellSlots> {
}
export {};

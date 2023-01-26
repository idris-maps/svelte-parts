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
export type FoldUpProps = typeof __propDef.props;
export type FoldUpEvents = typeof __propDef.events;
export type FoldUpSlots = typeof __propDef.slots;
export default class FoldUp extends SvelteComponentTyped<FoldUpProps, FoldUpEvents, FoldUpSlots> {
}
export {};

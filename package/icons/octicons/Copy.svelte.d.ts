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
export type CopyProps = typeof __propDef.props;
export type CopyEvents = typeof __propDef.events;
export type CopySlots = typeof __propDef.slots;
export default class Copy extends SvelteComponentTyped<CopyProps, CopyEvents, CopySlots> {
}
export {};

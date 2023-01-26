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
export type SkipFillProps = typeof __propDef.props;
export type SkipFillEvents = typeof __propDef.events;
export type SkipFillSlots = typeof __propDef.slots;
export default class SkipFill extends SvelteComponentTyped<SkipFillProps, SkipFillEvents, SkipFillSlots> {
}
export {};

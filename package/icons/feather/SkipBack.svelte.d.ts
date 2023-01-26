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
export type SkipBackProps = typeof __propDef.props;
export type SkipBackEvents = typeof __propDef.events;
export type SkipBackSlots = typeof __propDef.slots;
export default class SkipBack extends SvelteComponentTyped<SkipBackProps, SkipBackEvents, SkipBackSlots> {
}
export {};

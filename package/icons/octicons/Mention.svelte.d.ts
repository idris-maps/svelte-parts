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
export type MentionProps = typeof __propDef.props;
export type MentionEvents = typeof __propDef.events;
export type MentionSlots = typeof __propDef.slots;
export default class Mention extends SvelteComponentTyped<MentionProps, MentionEvents, MentionSlots> {
}
export {};

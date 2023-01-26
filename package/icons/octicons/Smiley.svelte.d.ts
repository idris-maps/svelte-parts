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
export type SmileyProps = typeof __propDef.props;
export type SmileyEvents = typeof __propDef.events;
export type SmileySlots = typeof __propDef.slots;
export default class Smiley extends SvelteComponentTyped<SmileyProps, SmileyEvents, SmileySlots> {
}
export {};

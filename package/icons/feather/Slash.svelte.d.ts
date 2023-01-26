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
export type SlashProps = typeof __propDef.props;
export type SlashEvents = typeof __propDef.events;
export type SlashSlots = typeof __propDef.slots;
export default class Slash extends SvelteComponentTyped<SlashProps, SlashEvents, SlashSlots> {
}
export {};

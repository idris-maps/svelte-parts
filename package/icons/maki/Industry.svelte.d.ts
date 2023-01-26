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
export type IndustryProps = typeof __propDef.props;
export type IndustryEvents = typeof __propDef.events;
export type IndustrySlots = typeof __propDef.slots;
export default class Industry extends SvelteComponentTyped<IndustryProps, IndustryEvents, IndustrySlots> {
}
export {};

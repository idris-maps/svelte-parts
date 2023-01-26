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
export type AwardProps = typeof __propDef.props;
export type AwardEvents = typeof __propDef.events;
export type AwardSlots = typeof __propDef.slots;
export default class Award extends SvelteComponentTyped<AwardProps, AwardEvents, AwardSlots> {
}
export {};

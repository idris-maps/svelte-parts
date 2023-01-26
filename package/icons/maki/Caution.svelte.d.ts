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
export type CautionProps = typeof __propDef.props;
export type CautionEvents = typeof __propDef.events;
export type CautionSlots = typeof __propDef.slots;
export default class Caution extends SvelteComponentTyped<CautionProps, CautionEvents, CautionSlots> {
}
export {};

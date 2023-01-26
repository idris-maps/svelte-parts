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
export type HelpCircleProps = typeof __propDef.props;
export type HelpCircleEvents = typeof __propDef.events;
export type HelpCircleSlots = typeof __propDef.slots;
export default class HelpCircle extends SvelteComponentTyped<HelpCircleProps, HelpCircleEvents, HelpCircleSlots> {
}
export {};

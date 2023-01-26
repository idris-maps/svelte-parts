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
export type HorizontalRuleProps = typeof __propDef.props;
export type HorizontalRuleEvents = typeof __propDef.events;
export type HorizontalRuleSlots = typeof __propDef.slots;
export default class HorizontalRule extends SvelteComponentTyped<HorizontalRuleProps, HorizontalRuleEvents, HorizontalRuleSlots> {
}
export {};

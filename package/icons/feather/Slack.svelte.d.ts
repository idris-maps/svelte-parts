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
export type SlackProps = typeof __propDef.props;
export type SlackEvents = typeof __propDef.events;
export type SlackSlots = typeof __propDef.slots;
export default class Slack extends SvelteComponentTyped<SlackProps, SlackEvents, SlackSlots> {
}
export {};

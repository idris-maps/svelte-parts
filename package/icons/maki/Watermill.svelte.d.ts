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
export type WatermillProps = typeof __propDef.props;
export type WatermillEvents = typeof __propDef.events;
export type WatermillSlots = typeof __propDef.slots;
export default class Watermill extends SvelteComponentTyped<WatermillProps, WatermillEvents, WatermillSlots> {
}
export {};

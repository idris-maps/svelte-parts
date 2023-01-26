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
export type HistoryProps = typeof __propDef.props;
export type HistoryEvents = typeof __propDef.events;
export type HistorySlots = typeof __propDef.slots;
export default class History extends SvelteComponentTyped<HistoryProps, HistoryEvents, HistorySlots> {
}
export {};

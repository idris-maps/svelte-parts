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
export type HistoricProps = typeof __propDef.props;
export type HistoricEvents = typeof __propDef.events;
export type HistoricSlots = typeof __propDef.slots;
export default class Historic extends SvelteComponentTyped<HistoricProps, HistoricEvents, HistoricSlots> {
}
export {};

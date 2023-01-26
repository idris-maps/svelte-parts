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
export type ReportProps = typeof __propDef.props;
export type ReportEvents = typeof __propDef.events;
export type ReportSlots = typeof __propDef.slots;
export default class Report extends SvelteComponentTyped<ReportProps, ReportEvents, ReportSlots> {
}
export {};

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
export type PrinterProps = typeof __propDef.props;
export type PrinterEvents = typeof __propDef.events;
export type PrinterSlots = typeof __propDef.slots;
export default class Printer extends SvelteComponentTyped<PrinterProps, PrinterEvents, PrinterSlots> {
}
export {};

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
export type RefreshCcwProps = typeof __propDef.props;
export type RefreshCcwEvents = typeof __propDef.events;
export type RefreshCcwSlots = typeof __propDef.slots;
export default class RefreshCcw extends SvelteComponentTyped<RefreshCcwProps, RefreshCcwEvents, RefreshCcwSlots> {
}
export {};

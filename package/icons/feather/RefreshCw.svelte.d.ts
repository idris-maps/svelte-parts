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
export type RefreshCwProps = typeof __propDef.props;
export type RefreshCwEvents = typeof __propDef.events;
export type RefreshCwSlots = typeof __propDef.slots;
export default class RefreshCw extends SvelteComponentTyped<RefreshCwProps, RefreshCwEvents, RefreshCwSlots> {
}
export {};

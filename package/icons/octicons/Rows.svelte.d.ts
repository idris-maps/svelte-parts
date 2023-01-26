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
export type RowsProps = typeof __propDef.props;
export type RowsEvents = typeof __propDef.events;
export type RowsSlots = typeof __propDef.slots;
export default class Rows extends SvelteComponentTyped<RowsProps, RowsEvents, RowsSlots> {
}
export {};

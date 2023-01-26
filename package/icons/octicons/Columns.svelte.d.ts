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
export type ColumnsProps = typeof __propDef.props;
export type ColumnsEvents = typeof __propDef.events;
export type ColumnsSlots = typeof __propDef.slots;
export default class Columns extends SvelteComponentTyped<ColumnsProps, ColumnsEvents, ColumnsSlots> {
}
export {};

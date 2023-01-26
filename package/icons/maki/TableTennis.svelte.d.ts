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
export type TableTennisProps = typeof __propDef.props;
export type TableTennisEvents = typeof __propDef.events;
export type TableTennisSlots = typeof __propDef.slots;
export default class TableTennis extends SvelteComponentTyped<TableTennisProps, TableTennisEvents, TableTennisSlots> {
}
export {};

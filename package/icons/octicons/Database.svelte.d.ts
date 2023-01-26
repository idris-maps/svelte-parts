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
export type DatabaseProps = typeof __propDef.props;
export type DatabaseEvents = typeof __propDef.events;
export type DatabaseSlots = typeof __propDef.slots;
export default class Database extends SvelteComponentTyped<DatabaseProps, DatabaseEvents, DatabaseSlots> {
}
export {};

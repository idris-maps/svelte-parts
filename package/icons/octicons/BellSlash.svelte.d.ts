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
export type BellSlashProps = typeof __propDef.props;
export type BellSlashEvents = typeof __propDef.events;
export type BellSlashSlots = typeof __propDef.slots;
export default class BellSlash extends SvelteComponentTyped<BellSlashProps, BellSlashEvents, BellSlashSlots> {
}
export {};

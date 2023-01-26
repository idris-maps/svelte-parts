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
export type CloudOfflineProps = typeof __propDef.props;
export type CloudOfflineEvents = typeof __propDef.events;
export type CloudOfflineSlots = typeof __propDef.slots;
export default class CloudOffline extends SvelteComponentTyped<CloudOfflineProps, CloudOfflineEvents, CloudOfflineSlots> {
}
export {};

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
export type MonitorProps = typeof __propDef.props;
export type MonitorEvents = typeof __propDef.events;
export type MonitorSlots = typeof __propDef.slots;
export default class Monitor extends SvelteComponentTyped<MonitorProps, MonitorEvents, MonitorSlots> {
}
export {};

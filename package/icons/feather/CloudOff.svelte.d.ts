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
export type CloudOffProps = typeof __propDef.props;
export type CloudOffEvents = typeof __propDef.events;
export type CloudOffSlots = typeof __propDef.slots;
export default class CloudOff extends SvelteComponentTyped<CloudOffProps, CloudOffEvents, CloudOffSlots> {
}
export {};

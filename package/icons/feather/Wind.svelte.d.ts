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
export type WindProps = typeof __propDef.props;
export type WindEvents = typeof __propDef.events;
export type WindSlots = typeof __propDef.slots;
export default class Wind extends SvelteComponentTyped<WindProps, WindEvents, WindSlots> {
}
export {};

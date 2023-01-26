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
export type CloudSnowProps = typeof __propDef.props;
export type CloudSnowEvents = typeof __propDef.events;
export type CloudSnowSlots = typeof __propDef.slots;
export default class CloudSnow extends SvelteComponentTyped<CloudSnowProps, CloudSnowEvents, CloudSnowSlots> {
}
export {};

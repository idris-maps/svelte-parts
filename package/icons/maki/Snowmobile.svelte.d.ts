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
export type SnowmobileProps = typeof __propDef.props;
export type SnowmobileEvents = typeof __propDef.events;
export type SnowmobileSlots = typeof __propDef.slots;
export default class Snowmobile extends SvelteComponentTyped<SnowmobileProps, SnowmobileEvents, SnowmobileSlots> {
}
export {};

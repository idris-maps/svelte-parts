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
export type SunriseProps = typeof __propDef.props;
export type SunriseEvents = typeof __propDef.events;
export type SunriseSlots = typeof __propDef.slots;
export default class Sunrise extends SvelteComponentTyped<SunriseProps, SunriseEvents, SunriseSlots> {
}
export {};

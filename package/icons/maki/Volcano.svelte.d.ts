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
export type VolcanoProps = typeof __propDef.props;
export type VolcanoEvents = typeof __propDef.events;
export type VolcanoSlots = typeof __propDef.slots;
export default class Volcano extends SvelteComponentTyped<VolcanoProps, VolcanoEvents, VolcanoSlots> {
}
export {};

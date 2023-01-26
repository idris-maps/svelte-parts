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
export type PoliceProps = typeof __propDef.props;
export type PoliceEvents = typeof __propDef.events;
export type PoliceSlots = typeof __propDef.slots;
export default class Police extends SvelteComponentTyped<PoliceProps, PoliceEvents, PoliceSlots> {
}
export {};

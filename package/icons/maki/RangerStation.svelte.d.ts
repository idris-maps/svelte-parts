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
export type RangerStationProps = typeof __propDef.props;
export type RangerStationEvents = typeof __propDef.events;
export type RangerStationSlots = typeof __propDef.slots;
export default class RangerStation extends SvelteComponentTyped<RangerStationProps, RangerStationEvents, RangerStationSlots> {
}
export {};

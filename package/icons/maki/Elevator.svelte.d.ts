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
export type ElevatorProps = typeof __propDef.props;
export type ElevatorEvents = typeof __propDef.events;
export type ElevatorSlots = typeof __propDef.slots;
export default class Elevator extends SvelteComponentTyped<ElevatorProps, ElevatorEvents, ElevatorSlots> {
}
export {};

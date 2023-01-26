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
export type ScooterProps = typeof __propDef.props;
export type ScooterEvents = typeof __propDef.events;
export type ScooterSlots = typeof __propDef.slots;
export default class Scooter extends SvelteComponentTyped<ScooterProps, ScooterEvents, ScooterSlots> {
}
export {};

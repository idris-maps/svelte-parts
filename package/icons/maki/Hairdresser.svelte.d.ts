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
export type HairdresserProps = typeof __propDef.props;
export type HairdresserEvents = typeof __propDef.events;
export type HairdresserSlots = typeof __propDef.slots;
export default class Hairdresser extends SvelteComponentTyped<HairdresserProps, HairdresserEvents, HairdresserSlots> {
}
export {};

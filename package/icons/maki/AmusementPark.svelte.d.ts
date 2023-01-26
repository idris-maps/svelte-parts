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
export type AmusementParkProps = typeof __propDef.props;
export type AmusementParkEvents = typeof __propDef.events;
export type AmusementParkSlots = typeof __propDef.slots;
export default class AmusementPark extends SvelteComponentTyped<AmusementParkProps, AmusementParkEvents, AmusementParkSlots> {
}
export {};

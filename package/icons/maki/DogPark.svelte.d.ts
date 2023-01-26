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
export type DogParkProps = typeof __propDef.props;
export type DogParkEvents = typeof __propDef.events;
export type DogParkSlots = typeof __propDef.slots;
export default class DogPark extends SvelteComponentTyped<DogParkProps, DogParkEvents, DogParkSlots> {
}
export {};

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
export type AnimalShelterProps = typeof __propDef.props;
export type AnimalShelterEvents = typeof __propDef.events;
export type AnimalShelterSlots = typeof __propDef.slots;
export default class AnimalShelter extends SvelteComponentTyped<AnimalShelterProps, AnimalShelterEvents, AnimalShelterSlots> {
}
export {};

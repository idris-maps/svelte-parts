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
export type CarRentalProps = typeof __propDef.props;
export type CarRentalEvents = typeof __propDef.events;
export type CarRentalSlots = typeof __propDef.slots;
export default class CarRental extends SvelteComponentTyped<CarRentalProps, CarRentalEvents, CarRentalSlots> {
}
export {};

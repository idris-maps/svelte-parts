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
export type VeterinaryProps = typeof __propDef.props;
export type VeterinaryEvents = typeof __propDef.events;
export type VeterinarySlots = typeof __propDef.slots;
export default class Veterinary extends SvelteComponentTyped<VeterinaryProps, VeterinaryEvents, VeterinarySlots> {
}
export {};

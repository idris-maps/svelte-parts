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
export type PharmacyProps = typeof __propDef.props;
export type PharmacyEvents = typeof __propDef.events;
export type PharmacySlots = typeof __propDef.slots;
export default class Pharmacy extends SvelteComponentTyped<PharmacyProps, PharmacyEvents, PharmacySlots> {
}
export {};

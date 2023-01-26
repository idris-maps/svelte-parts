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
export type ShelterProps = typeof __propDef.props;
export type ShelterEvents = typeof __propDef.events;
export type ShelterSlots = typeof __propDef.slots;
export default class Shelter extends SvelteComponentTyped<ShelterProps, ShelterEvents, ShelterSlots> {
}
export {};

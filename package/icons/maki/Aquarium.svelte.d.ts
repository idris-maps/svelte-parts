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
export type AquariumProps = typeof __propDef.props;
export type AquariumEvents = typeof __propDef.events;
export type AquariumSlots = typeof __propDef.slots;
export default class Aquarium extends SvelteComponentTyped<AquariumProps, AquariumEvents, AquariumSlots> {
}
export {};

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
export type PitchProps = typeof __propDef.props;
export type PitchEvents = typeof __propDef.events;
export type PitchSlots = typeof __propDef.slots;
export default class Pitch extends SvelteComponentTyped<PitchProps, PitchEvents, PitchSlots> {
}
export {};

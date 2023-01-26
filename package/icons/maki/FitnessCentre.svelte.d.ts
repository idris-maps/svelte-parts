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
export type FitnessCentreProps = typeof __propDef.props;
export type FitnessCentreEvents = typeof __propDef.events;
export type FitnessCentreSlots = typeof __propDef.slots;
export default class FitnessCentre extends SvelteComponentTyped<FitnessCentreProps, FitnessCentreEvents, FitnessCentreSlots> {
}
export {};

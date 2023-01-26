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
export type LandmarkProps = typeof __propDef.props;
export type LandmarkEvents = typeof __propDef.events;
export type LandmarkSlots = typeof __propDef.slots;
export default class Landmark extends SvelteComponentTyped<LandmarkProps, LandmarkEvents, LandmarkSlots> {
}
export {};

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
export type LandmarkJpProps = typeof __propDef.props;
export type LandmarkJpEvents = typeof __propDef.events;
export type LandmarkJpSlots = typeof __propDef.slots;
export default class LandmarkJp extends SvelteComponentTyped<LandmarkJpProps, LandmarkJpEvents, LandmarkJpSlots> {
}
export {};

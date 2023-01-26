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
export type OctagonProps = typeof __propDef.props;
export type OctagonEvents = typeof __propDef.events;
export type OctagonSlots = typeof __propDef.slots;
export default class Octagon extends SvelteComponentTyped<OctagonProps, OctagonEvents, OctagonSlots> {
}
export {};

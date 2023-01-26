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
export type LodgingProps = typeof __propDef.props;
export type LodgingEvents = typeof __propDef.events;
export type LodgingSlots = typeof __propDef.slots;
export default class Lodging extends SvelteComponentTyped<LodgingProps, LodgingEvents, LodgingSlots> {
}
export {};

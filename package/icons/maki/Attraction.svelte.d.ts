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
export type AttractionProps = typeof __propDef.props;
export type AttractionEvents = typeof __propDef.events;
export type AttractionSlots = typeof __propDef.slots;
export default class Attraction extends SvelteComponentTyped<AttractionProps, AttractionEvents, AttractionSlots> {
}
export {};

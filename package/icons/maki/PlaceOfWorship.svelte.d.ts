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
export type PlaceOfWorshipProps = typeof __propDef.props;
export type PlaceOfWorshipEvents = typeof __propDef.events;
export type PlaceOfWorshipSlots = typeof __propDef.slots;
export default class PlaceOfWorship extends SvelteComponentTyped<PlaceOfWorshipProps, PlaceOfWorshipEvents, PlaceOfWorshipSlots> {
}
export {};

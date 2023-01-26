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
export type SuitcaseProps = typeof __propDef.props;
export type SuitcaseEvents = typeof __propDef.events;
export type SuitcaseSlots = typeof __propDef.slots;
export default class Suitcase extends SvelteComponentTyped<SuitcaseProps, SuitcaseEvents, SuitcaseSlots> {
}
export {};

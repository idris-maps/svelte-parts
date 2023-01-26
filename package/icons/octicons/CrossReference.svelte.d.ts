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
export type CrossReferenceProps = typeof __propDef.props;
export type CrossReferenceEvents = typeof __propDef.events;
export type CrossReferenceSlots = typeof __propDef.slots;
export default class CrossReference extends SvelteComponentTyped<CrossReferenceProps, CrossReferenceEvents, CrossReferenceSlots> {
}
export {};

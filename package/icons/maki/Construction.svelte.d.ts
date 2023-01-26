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
export type ConstructionProps = typeof __propDef.props;
export type ConstructionEvents = typeof __propDef.events;
export type ConstructionSlots = typeof __propDef.slots;
export default class Construction extends SvelteComponentTyped<ConstructionProps, ConstructionEvents, ConstructionSlots> {
}
export {};

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
export type DivideProps = typeof __propDef.props;
export type DivideEvents = typeof __propDef.events;
export type DivideSlots = typeof __propDef.slots;
export default class Divide extends SvelteComponentTyped<DivideProps, DivideEvents, DivideSlots> {
}
export {};

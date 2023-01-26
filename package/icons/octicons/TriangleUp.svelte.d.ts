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
export type TriangleUpProps = typeof __propDef.props;
export type TriangleUpEvents = typeof __propDef.events;
export type TriangleUpSlots = typeof __propDef.slots;
export default class TriangleUp extends SvelteComponentTyped<TriangleUpProps, TriangleUpEvents, TriangleUpSlots> {
}
export {};

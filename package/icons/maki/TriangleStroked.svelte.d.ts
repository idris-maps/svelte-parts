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
export type TriangleStrokedProps = typeof __propDef.props;
export type TriangleStrokedEvents = typeof __propDef.events;
export type TriangleStrokedSlots = typeof __propDef.slots;
export default class TriangleStroked extends SvelteComponentTyped<TriangleStrokedProps, TriangleStrokedEvents, TriangleStrokedSlots> {
}
export {};

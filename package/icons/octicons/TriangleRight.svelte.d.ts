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
export type TriangleRightProps = typeof __propDef.props;
export type TriangleRightEvents = typeof __propDef.events;
export type TriangleRightSlots = typeof __propDef.slots;
export default class TriangleRight extends SvelteComponentTyped<TriangleRightProps, TriangleRightEvents, TriangleRightSlots> {
}
export {};

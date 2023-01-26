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
export type TriangleDownProps = typeof __propDef.props;
export type TriangleDownEvents = typeof __propDef.events;
export type TriangleDownSlots = typeof __propDef.slots;
export default class TriangleDown extends SvelteComponentTyped<TriangleDownProps, TriangleDownEvents, TriangleDownSlots> {
}
export {};

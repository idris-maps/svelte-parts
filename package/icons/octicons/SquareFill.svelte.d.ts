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
export type SquareFillProps = typeof __propDef.props;
export type SquareFillEvents = typeof __propDef.events;
export type SquareFillSlots = typeof __propDef.slots;
export default class SquareFill extends SvelteComponentTyped<SquareFillProps, SquareFillEvents, SquareFillSlots> {
}
export {};

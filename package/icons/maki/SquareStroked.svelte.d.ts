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
export type SquareStrokedProps = typeof __propDef.props;
export type SquareStrokedEvents = typeof __propDef.events;
export type SquareStrokedSlots = typeof __propDef.slots;
export default class SquareStroked extends SvelteComponentTyped<SquareStrokedProps, SquareStrokedEvents, SquareStrokedSlots> {
}
export {};

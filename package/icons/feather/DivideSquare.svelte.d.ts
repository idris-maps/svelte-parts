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
export type DivideSquareProps = typeof __propDef.props;
export type DivideSquareEvents = typeof __propDef.events;
export type DivideSquareSlots = typeof __propDef.slots;
export default class DivideSquare extends SvelteComponentTyped<DivideSquareProps, DivideSquareEvents, DivideSquareSlots> {
}
export {};

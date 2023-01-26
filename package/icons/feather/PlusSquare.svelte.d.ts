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
export type PlusSquareProps = typeof __propDef.props;
export type PlusSquareEvents = typeof __propDef.events;
export type PlusSquareSlots = typeof __propDef.slots;
export default class PlusSquare extends SvelteComponentTyped<PlusSquareProps, PlusSquareEvents, PlusSquareSlots> {
}
export {};

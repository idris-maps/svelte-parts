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
export type SquareProps = typeof __propDef.props;
export type SquareEvents = typeof __propDef.events;
export type SquareSlots = typeof __propDef.slots;
export default class Square extends SvelteComponentTyped<SquareProps, SquareEvents, SquareSlots> {
}
export {};

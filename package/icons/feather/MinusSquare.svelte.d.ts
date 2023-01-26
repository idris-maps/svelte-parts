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
export type MinusSquareProps = typeof __propDef.props;
export type MinusSquareEvents = typeof __propDef.events;
export type MinusSquareSlots = typeof __propDef.slots;
export default class MinusSquare extends SvelteComponentTyped<MinusSquareProps, MinusSquareEvents, MinusSquareSlots> {
}
export {};

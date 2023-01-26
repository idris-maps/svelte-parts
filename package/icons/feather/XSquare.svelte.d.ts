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
export type XSquareProps = typeof __propDef.props;
export type XSquareEvents = typeof __propDef.events;
export type XSquareSlots = typeof __propDef.slots;
export default class XSquare extends SvelteComponentTyped<XSquareProps, XSquareEvents, XSquareSlots> {
}
export {};

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
export type CodeSquareProps = typeof __propDef.props;
export type CodeSquareEvents = typeof __propDef.events;
export type CodeSquareSlots = typeof __propDef.slots;
export default class CodeSquare extends SvelteComponentTyped<CodeSquareProps, CodeSquareEvents, CodeSquareSlots> {
}
export {};

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
export type CheckSquareProps = typeof __propDef.props;
export type CheckSquareEvents = typeof __propDef.events;
export type CheckSquareSlots = typeof __propDef.slots;
export default class CheckSquare extends SvelteComponentTyped<CheckSquareProps, CheckSquareEvents, CheckSquareSlots> {
}
export {};

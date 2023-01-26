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
export type MortarBoardProps = typeof __propDef.props;
export type MortarBoardEvents = typeof __propDef.events;
export type MortarBoardSlots = typeof __propDef.slots;
export default class MortarBoard extends SvelteComponentTyped<MortarBoardProps, MortarBoardEvents, MortarBoardSlots> {
}
export {};

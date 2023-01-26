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
export type AlignRightProps = typeof __propDef.props;
export type AlignRightEvents = typeof __propDef.events;
export type AlignRightSlots = typeof __propDef.slots;
export default class AlignRight extends SvelteComponentTyped<AlignRightProps, AlignRightEvents, AlignRightSlots> {
}
export {};

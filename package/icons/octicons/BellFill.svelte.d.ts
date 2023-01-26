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
export type BellFillProps = typeof __propDef.props;
export type BellFillEvents = typeof __propDef.events;
export type BellFillSlots = typeof __propDef.slots;
export default class BellFill extends SvelteComponentTyped<BellFillProps, BellFillEvents, BellFillSlots> {
}
export {};

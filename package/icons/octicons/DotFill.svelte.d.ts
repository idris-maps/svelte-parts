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
export type DotFillProps = typeof __propDef.props;
export type DotFillEvents = typeof __propDef.events;
export type DotFillSlots = typeof __propDef.slots;
export default class DotFill extends SvelteComponentTyped<DotFillProps, DotFillEvents, DotFillSlots> {
}
export {};

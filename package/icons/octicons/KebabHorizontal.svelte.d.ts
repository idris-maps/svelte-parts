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
export type KebabHorizontalProps = typeof __propDef.props;
export type KebabHorizontalEvents = typeof __propDef.events;
export type KebabHorizontalSlots = typeof __propDef.slots;
export default class KebabHorizontal extends SvelteComponentTyped<KebabHorizontalProps, KebabHorizontalEvents, KebabHorizontalSlots> {
}
export {};

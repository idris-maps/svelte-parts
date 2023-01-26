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
export type CornerRightUpProps = typeof __propDef.props;
export type CornerRightUpEvents = typeof __propDef.events;
export type CornerRightUpSlots = typeof __propDef.slots;
export default class CornerRightUp extends SvelteComponentTyped<CornerRightUpProps, CornerRightUpEvents, CornerRightUpSlots> {
}
export {};

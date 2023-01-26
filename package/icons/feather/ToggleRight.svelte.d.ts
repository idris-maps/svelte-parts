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
export type ToggleRightProps = typeof __propDef.props;
export type ToggleRightEvents = typeof __propDef.events;
export type ToggleRightSlots = typeof __propDef.slots;
export default class ToggleRight extends SvelteComponentTyped<ToggleRightProps, ToggleRightEvents, ToggleRightSlots> {
}
export {};

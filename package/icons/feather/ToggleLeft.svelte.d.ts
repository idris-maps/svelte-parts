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
export type ToggleLeftProps = typeof __propDef.props;
export type ToggleLeftEvents = typeof __propDef.events;
export type ToggleLeftSlots = typeof __propDef.slots;
export default class ToggleLeft extends SvelteComponentTyped<ToggleLeftProps, ToggleLeftEvents, ToggleLeftSlots> {
}
export {};

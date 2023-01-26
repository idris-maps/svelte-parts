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
export type MousePointerProps = typeof __propDef.props;
export type MousePointerEvents = typeof __propDef.events;
export type MousePointerSlots = typeof __propDef.slots;
export default class MousePointer extends SvelteComponentTyped<MousePointerProps, MousePointerEvents, MousePointerSlots> {
}
export {};

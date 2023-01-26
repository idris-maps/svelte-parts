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
export type LayoutProps = typeof __propDef.props;
export type LayoutEvents = typeof __propDef.events;
export type LayoutSlots = typeof __propDef.slots;
export default class Layout extends SvelteComponentTyped<LayoutProps, LayoutEvents, LayoutSlots> {
}
export {};

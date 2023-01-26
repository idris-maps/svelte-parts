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
export type SidebarExpandProps = typeof __propDef.props;
export type SidebarExpandEvents = typeof __propDef.events;
export type SidebarExpandSlots = typeof __propDef.slots;
export default class SidebarExpand extends SvelteComponentTyped<SidebarExpandProps, SidebarExpandEvents, SidebarExpandSlots> {
}
export {};

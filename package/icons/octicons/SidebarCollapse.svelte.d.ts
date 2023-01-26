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
export type SidebarCollapseProps = typeof __propDef.props;
export type SidebarCollapseEvents = typeof __propDef.events;
export type SidebarCollapseSlots = typeof __propDef.slots;
export default class SidebarCollapse extends SvelteComponentTyped<SidebarCollapseProps, SidebarCollapseEvents, SidebarCollapseSlots> {
}
export {};

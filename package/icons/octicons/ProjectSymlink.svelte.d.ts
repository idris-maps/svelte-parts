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
export type ProjectSymlinkProps = typeof __propDef.props;
export type ProjectSymlinkEvents = typeof __propDef.events;
export type ProjectSymlinkSlots = typeof __propDef.slots;
export default class ProjectSymlink extends SvelteComponentTyped<ProjectSymlinkProps, ProjectSymlinkEvents, ProjectSymlinkSlots> {
}
export {};

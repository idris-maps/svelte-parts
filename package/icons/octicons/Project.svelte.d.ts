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
export type ProjectProps = typeof __propDef.props;
export type ProjectEvents = typeof __propDef.events;
export type ProjectSlots = typeof __propDef.slots;
export default class Project extends SvelteComponentTyped<ProjectProps, ProjectEvents, ProjectSlots> {
}
export {};

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
export type ProjectRoadmapProps = typeof __propDef.props;
export type ProjectRoadmapEvents = typeof __propDef.events;
export type ProjectRoadmapSlots = typeof __propDef.slots;
export default class ProjectRoadmap extends SvelteComponentTyped<ProjectRoadmapProps, ProjectRoadmapEvents, ProjectRoadmapSlots> {
}
export {};

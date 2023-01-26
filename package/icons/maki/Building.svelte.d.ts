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
export type BuildingProps = typeof __propDef.props;
export type BuildingEvents = typeof __propDef.events;
export type BuildingSlots = typeof __propDef.slots;
export default class Building extends SvelteComponentTyped<BuildingProps, BuildingEvents, BuildingSlots> {
}
export {};

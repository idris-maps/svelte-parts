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
export type RoadblockProps = typeof __propDef.props;
export type RoadblockEvents = typeof __propDef.events;
export type RoadblockSlots = typeof __propDef.slots;
export default class Roadblock extends SvelteComponentTyped<RoadblockProps, RoadblockEvents, RoadblockSlots> {
}
export {};

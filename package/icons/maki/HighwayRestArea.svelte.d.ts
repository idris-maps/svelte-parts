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
export type HighwayRestAreaProps = typeof __propDef.props;
export type HighwayRestAreaEvents = typeof __propDef.events;
export type HighwayRestAreaSlots = typeof __propDef.slots;
export default class HighwayRestArea extends SvelteComponentTyped<HighwayRestAreaProps, HighwayRestAreaEvents, HighwayRestAreaSlots> {
}
export {};

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
export type StopCircleProps = typeof __propDef.props;
export type StopCircleEvents = typeof __propDef.events;
export type StopCircleSlots = typeof __propDef.slots;
export default class StopCircle extends SvelteComponentTyped<StopCircleProps, StopCircleEvents, StopCircleSlots> {
}
export {};

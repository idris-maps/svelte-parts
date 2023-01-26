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
export type CircleStrokedProps = typeof __propDef.props;
export type CircleStrokedEvents = typeof __propDef.events;
export type CircleStrokedSlots = typeof __propDef.slots;
export default class CircleStroked extends SvelteComponentTyped<CircleStrokedProps, CircleStrokedEvents, CircleStrokedSlots> {
}
export {};

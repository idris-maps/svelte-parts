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
export type StarStrokedProps = typeof __propDef.props;
export type StarStrokedEvents = typeof __propDef.events;
export type StarStrokedSlots = typeof __propDef.slots;
export default class StarStroked extends SvelteComponentTyped<StarStrokedProps, StarStrokedEvents, StarStrokedSlots> {
}
export {};

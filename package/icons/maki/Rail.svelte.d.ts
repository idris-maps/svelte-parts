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
export type RailProps = typeof __propDef.props;
export type RailEvents = typeof __propDef.events;
export type RailSlots = typeof __propDef.slots;
export default class Rail extends SvelteComponentTyped<RailProps, RailEvents, RailSlots> {
}
export {};

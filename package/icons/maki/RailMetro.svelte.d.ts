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
export type RailMetroProps = typeof __propDef.props;
export type RailMetroEvents = typeof __propDef.events;
export type RailMetroSlots = typeof __propDef.slots;
export default class RailMetro extends SvelteComponentTyped<RailMetroProps, RailMetroEvents, RailMetroSlots> {
}
export {};

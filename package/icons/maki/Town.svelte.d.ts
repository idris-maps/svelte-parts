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
export type TownProps = typeof __propDef.props;
export type TownEvents = typeof __propDef.events;
export type TownSlots = typeof __propDef.slots;
export default class Town extends SvelteComponentTyped<TownProps, TownEvents, TownSlots> {
}
export {};

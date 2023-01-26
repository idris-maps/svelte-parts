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
export type TownHallProps = typeof __propDef.props;
export type TownHallEvents = typeof __propDef.events;
export type TownHallSlots = typeof __propDef.slots;
export default class TownHall extends SvelteComponentTyped<TownHallProps, TownHallEvents, TownHallSlots> {
}
export {};

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
export type NorthStarProps = typeof __propDef.props;
export type NorthStarEvents = typeof __propDef.events;
export type NorthStarSlots = typeof __propDef.slots;
export default class NorthStar extends SvelteComponentTyped<NorthStarProps, NorthStarEvents, NorthStarSlots> {
}
export {};

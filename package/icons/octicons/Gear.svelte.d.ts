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
export type GearProps = typeof __propDef.props;
export type GearEvents = typeof __propDef.events;
export type GearSlots = typeof __propDef.slots;
export default class Gear extends SvelteComponentTyped<GearProps, GearEvents, GearSlots> {
}
export {};

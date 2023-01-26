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
export type CodescanCheckmarkProps = typeof __propDef.props;
export type CodescanCheckmarkEvents = typeof __propDef.events;
export type CodescanCheckmarkSlots = typeof __propDef.slots;
export default class CodescanCheckmark extends SvelteComponentTyped<CodescanCheckmarkProps, CodescanCheckmarkEvents, CodescanCheckmarkSlots> {
}
export {};

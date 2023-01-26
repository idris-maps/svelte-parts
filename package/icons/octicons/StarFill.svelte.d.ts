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
export type StarFillProps = typeof __propDef.props;
export type StarFillEvents = typeof __propDef.events;
export type StarFillSlots = typeof __propDef.slots;
export default class StarFill extends SvelteComponentTyped<StarFillProps, StarFillEvents, StarFillSlots> {
}
export {};

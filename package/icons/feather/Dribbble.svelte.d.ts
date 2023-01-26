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
export type DribbbleProps = typeof __propDef.props;
export type DribbbleEvents = typeof __propDef.events;
export type DribbbleSlots = typeof __propDef.slots;
export default class Dribbble extends SvelteComponentTyped<DribbbleProps, DribbbleEvents, DribbbleSlots> {
}
export {};

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
export type CemeteryProps = typeof __propDef.props;
export type CemeteryEvents = typeof __propDef.events;
export type CemeterySlots = typeof __propDef.slots;
export default class Cemetery extends SvelteComponentTyped<CemeteryProps, CemeteryEvents, CemeterySlots> {
}
export {};

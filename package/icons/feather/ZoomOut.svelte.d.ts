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
export type ZoomOutProps = typeof __propDef.props;
export type ZoomOutEvents = typeof __propDef.events;
export type ZoomOutSlots = typeof __propDef.slots;
export default class ZoomOut extends SvelteComponentTyped<ZoomOutProps, ZoomOutEvents, ZoomOutSlots> {
}
export {};

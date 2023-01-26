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
export type ViewpointProps = typeof __propDef.props;
export type ViewpointEvents = typeof __propDef.events;
export type ViewpointSlots = typeof __propDef.slots;
export default class Viewpoint extends SvelteComponentTyped<ViewpointProps, ViewpointEvents, ViewpointSlots> {
}
export {};

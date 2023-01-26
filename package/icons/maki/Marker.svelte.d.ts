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
export type MarkerProps = typeof __propDef.props;
export type MarkerEvents = typeof __propDef.events;
export type MarkerSlots = typeof __propDef.slots;
export default class Marker extends SvelteComponentTyped<MarkerProps, MarkerEvents, MarkerSlots> {
}
export {};

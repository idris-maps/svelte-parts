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
export type VolleyballProps = typeof __propDef.props;
export type VolleyballEvents = typeof __propDef.events;
export type VolleyballSlots = typeof __propDef.slots;
export default class Volleyball extends SvelteComponentTyped<VolleyballProps, VolleyballEvents, VolleyballSlots> {
}
export {};

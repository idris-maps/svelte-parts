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
export type CastProps = typeof __propDef.props;
export type CastEvents = typeof __propDef.events;
export type CastSlots = typeof __propDef.slots;
export default class Cast extends SvelteComponentTyped<CastProps, CastEvents, CastSlots> {
}
export {};

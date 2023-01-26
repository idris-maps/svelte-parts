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
export type StadiumProps = typeof __propDef.props;
export type StadiumEvents = typeof __propDef.events;
export type StadiumSlots = typeof __propDef.slots;
export default class Stadium extends SvelteComponentTyped<StadiumProps, StadiumEvents, StadiumSlots> {
}
export {};

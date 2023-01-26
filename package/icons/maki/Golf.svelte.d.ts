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
export type GolfProps = typeof __propDef.props;
export type GolfEvents = typeof __propDef.events;
export type GolfSlots = typeof __propDef.slots;
export default class Golf extends SvelteComponentTyped<GolfProps, GolfEvents, GolfSlots> {
}
export {};

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
export type CasinoProps = typeof __propDef.props;
export type CasinoEvents = typeof __propDef.events;
export type CasinoSlots = typeof __propDef.slots;
export default class Casino extends SvelteComponentTyped<CasinoProps, CasinoEvents, CasinoSlots> {
}
export {};

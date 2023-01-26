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
export type BeerProps = typeof __propDef.props;
export type BeerEvents = typeof __propDef.events;
export type BeerSlots = typeof __propDef.slots;
export default class Beer extends SvelteComponentTyped<BeerProps, BeerEvents, BeerSlots> {
}
export {};

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
export type FarmProps = typeof __propDef.props;
export type FarmEvents = typeof __propDef.events;
export type FarmSlots = typeof __propDef.slots;
export default class Farm extends SvelteComponentTyped<FarmProps, FarmEvents, FarmSlots> {
}
export {};

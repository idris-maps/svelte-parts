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
export type HarborProps = typeof __propDef.props;
export type HarborEvents = typeof __propDef.events;
export type HarborSlots = typeof __propDef.slots;
export default class Harbor extends SvelteComponentTyped<HarborProps, HarborEvents, HarborSlots> {
}
export {};

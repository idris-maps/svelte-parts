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
export type FastFoodProps = typeof __propDef.props;
export type FastFoodEvents = typeof __propDef.events;
export type FastFoodSlots = typeof __propDef.slots;
export default class FastFood extends SvelteComponentTyped<FastFoodProps, FastFoodEvents, FastFoodSlots> {
}
export {};

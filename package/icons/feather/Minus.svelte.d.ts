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
export type MinusProps = typeof __propDef.props;
export type MinusEvents = typeof __propDef.events;
export type MinusSlots = typeof __propDef.slots;
export default class Minus extends SvelteComponentTyped<MinusProps, MinusEvents, MinusSlots> {
}
export {};

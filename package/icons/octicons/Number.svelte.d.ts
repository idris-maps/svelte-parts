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
export type NumberProps = typeof __propDef.props;
export type NumberEvents = typeof __propDef.events;
export type NumberSlots = typeof __propDef.slots;
export default class Number extends SvelteComponentTyped<NumberProps, NumberEvents, NumberSlots> {
}
export {};

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
export type PowerProps = typeof __propDef.props;
export type PowerEvents = typeof __propDef.events;
export type PowerSlots = typeof __propDef.slots;
export default class Power extends SvelteComponentTyped<PowerProps, PowerEvents, PowerSlots> {
}
export {};

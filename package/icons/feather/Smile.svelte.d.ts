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
export type SmileProps = typeof __propDef.props;
export type SmileEvents = typeof __propDef.events;
export type SmileSlots = typeof __propDef.slots;
export default class Smile extends SvelteComponentTyped<SmileProps, SmileEvents, SmileSlots> {
}
export {};

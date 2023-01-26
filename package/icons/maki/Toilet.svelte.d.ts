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
export type ToiletProps = typeof __propDef.props;
export type ToiletEvents = typeof __propDef.events;
export type ToiletSlots = typeof __propDef.slots;
export default class Toilet extends SvelteComponentTyped<ToiletProps, ToiletEvents, ToiletSlots> {
}
export {};

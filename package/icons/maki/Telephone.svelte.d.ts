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
export type TelephoneProps = typeof __propDef.props;
export type TelephoneEvents = typeof __propDef.events;
export type TelephoneSlots = typeof __propDef.slots;
export default class Telephone extends SvelteComponentTyped<TelephoneProps, TelephoneEvents, TelephoneSlots> {
}
export {};

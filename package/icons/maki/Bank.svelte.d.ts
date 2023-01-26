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
export type BankProps = typeof __propDef.props;
export type BankEvents = typeof __propDef.events;
export type BankSlots = typeof __propDef.slots;
export default class Bank extends SvelteComponentTyped<BankProps, BankEvents, BankSlots> {
}
export {};

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
export type BankJpProps = typeof __propDef.props;
export type BankJpEvents = typeof __propDef.events;
export type BankJpSlots = typeof __propDef.slots;
export default class BankJp extends SvelteComponentTyped<BankJpProps, BankJpEvents, BankJpSlots> {
}
export {};

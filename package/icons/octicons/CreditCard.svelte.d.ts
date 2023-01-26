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
export type CreditCardProps = typeof __propDef.props;
export type CreditCardEvents = typeof __propDef.events;
export type CreditCardSlots = typeof __propDef.slots;
export default class CreditCard extends SvelteComponentTyped<CreditCardProps, CreditCardEvents, CreditCardSlots> {
}
export {};

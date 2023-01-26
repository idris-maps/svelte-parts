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
export type CommercialProps = typeof __propDef.props;
export type CommercialEvents = typeof __propDef.events;
export type CommercialSlots = typeof __propDef.slots;
export default class Commercial extends SvelteComponentTyped<CommercialProps, CommercialEvents, CommercialSlots> {
}
export {};

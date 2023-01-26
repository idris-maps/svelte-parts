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
export type AmericanFootballProps = typeof __propDef.props;
export type AmericanFootballEvents = typeof __propDef.events;
export type AmericanFootballSlots = typeof __propDef.slots;
export default class AmericanFootball extends SvelteComponentTyped<AmericanFootballProps, AmericanFootballEvents, AmericanFootballSlots> {
}
export {};

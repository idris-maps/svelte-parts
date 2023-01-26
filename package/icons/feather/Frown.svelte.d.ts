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
export type FrownProps = typeof __propDef.props;
export type FrownEvents = typeof __propDef.events;
export type FrownSlots = typeof __propDef.slots;
export default class Frown extends SvelteComponentTyped<FrownProps, FrownEvents, FrownSlots> {
}
export {};

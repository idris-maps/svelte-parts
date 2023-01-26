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
export type IceCreamProps = typeof __propDef.props;
export type IceCreamEvents = typeof __propDef.events;
export type IceCreamSlots = typeof __propDef.slots;
export default class IceCream extends SvelteComponentTyped<IceCreamProps, IceCreamEvents, IceCreamSlots> {
}
export {};

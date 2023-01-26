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
export type SmartphoneProps = typeof __propDef.props;
export type SmartphoneEvents = typeof __propDef.events;
export type SmartphoneSlots = typeof __propDef.slots;
export default class Smartphone extends SvelteComponentTyped<SmartphoneProps, SmartphoneEvents, SmartphoneSlots> {
}
export {};

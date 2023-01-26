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
export type MobilePhoneProps = typeof __propDef.props;
export type MobilePhoneEvents = typeof __propDef.events;
export type MobilePhoneSlots = typeof __propDef.slots;
export default class MobilePhone extends SvelteComponentTyped<MobilePhoneProps, MobilePhoneEvents, MobilePhoneSlots> {
}
export {};

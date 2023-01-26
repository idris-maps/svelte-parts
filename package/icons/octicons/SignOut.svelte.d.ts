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
export type SignOutProps = typeof __propDef.props;
export type SignOutEvents = typeof __propDef.events;
export type SignOutSlots = typeof __propDef.slots;
export default class SignOut extends SvelteComponentTyped<SignOutProps, SignOutEvents, SignOutSlots> {
}
export {};

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
export type SignInProps = typeof __propDef.props;
export type SignInEvents = typeof __propDef.events;
export type SignInSlots = typeof __propDef.slots;
export default class SignIn extends SvelteComponentTyped<SignInProps, SignInEvents, SignInSlots> {
}
export {};

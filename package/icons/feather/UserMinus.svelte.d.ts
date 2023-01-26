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
export type UserMinusProps = typeof __propDef.props;
export type UserMinusEvents = typeof __propDef.events;
export type UserMinusSlots = typeof __propDef.slots;
export default class UserMinus extends SvelteComponentTyped<UserMinusProps, UserMinusEvents, UserMinusSlots> {
}
export {};

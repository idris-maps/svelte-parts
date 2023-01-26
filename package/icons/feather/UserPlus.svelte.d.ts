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
export type UserPlusProps = typeof __propDef.props;
export type UserPlusEvents = typeof __propDef.events;
export type UserPlusSlots = typeof __propDef.slots;
export default class UserPlus extends SvelteComponentTyped<UserPlusProps, UserPlusEvents, UserPlusSlots> {
}
export {};

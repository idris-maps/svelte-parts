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
export type UserXProps = typeof __propDef.props;
export type UserXEvents = typeof __propDef.events;
export type UserXSlots = typeof __propDef.slots;
export default class UserX extends SvelteComponentTyped<UserXProps, UserXEvents, UserXSlots> {
}
export {};

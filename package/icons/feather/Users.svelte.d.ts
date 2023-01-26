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
export type UsersProps = typeof __propDef.props;
export type UsersEvents = typeof __propDef.events;
export type UsersSlots = typeof __propDef.slots;
export default class Users extends SvelteComponentTyped<UsersProps, UsersEvents, UsersSlots> {
}
export {};

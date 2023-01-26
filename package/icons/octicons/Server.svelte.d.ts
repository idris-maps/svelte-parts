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
export type ServerProps = typeof __propDef.props;
export type ServerEvents = typeof __propDef.events;
export type ServerSlots = typeof __propDef.slots;
export default class Server extends SvelteComponentTyped<ServerProps, ServerEvents, ServerSlots> {
}
export {};

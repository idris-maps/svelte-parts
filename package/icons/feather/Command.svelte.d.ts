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
export type CommandProps = typeof __propDef.props;
export type CommandEvents = typeof __propDef.events;
export type CommandSlots = typeof __propDef.slots;
export default class Command extends SvelteComponentTyped<CommandProps, CommandEvents, CommandSlots> {
}
export {};

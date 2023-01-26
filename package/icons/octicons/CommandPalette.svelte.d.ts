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
export type CommandPaletteProps = typeof __propDef.props;
export type CommandPaletteEvents = typeof __propDef.events;
export type CommandPaletteSlots = typeof __propDef.slots;
export default class CommandPalette extends SvelteComponentTyped<CommandPaletteProps, CommandPaletteEvents, CommandPaletteSlots> {
}
export {};

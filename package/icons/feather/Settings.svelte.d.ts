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
export type SettingsProps = typeof __propDef.props;
export type SettingsEvents = typeof __propDef.events;
export type SettingsSlots = typeof __propDef.slots;
export default class Settings extends SvelteComponentTyped<SettingsProps, SettingsEvents, SettingsSlots> {
}
export {};

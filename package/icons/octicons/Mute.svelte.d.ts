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
export type MuteProps = typeof __propDef.props;
export type MuteEvents = typeof __propDef.events;
export type MuteSlots = typeof __propDef.slots;
export default class Mute extends SvelteComponentTyped<MuteProps, MuteEvents, MuteSlots> {
}
export {};

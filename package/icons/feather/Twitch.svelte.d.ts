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
export type TwitchProps = typeof __propDef.props;
export type TwitchEvents = typeof __propDef.events;
export type TwitchSlots = typeof __propDef.slots;
export default class Twitch extends SvelteComponentTyped<TwitchProps, TwitchEvents, TwitchSlots> {
}
export {};

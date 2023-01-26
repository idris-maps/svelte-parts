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
export type MinimizeProps = typeof __propDef.props;
export type MinimizeEvents = typeof __propDef.events;
export type MinimizeSlots = typeof __propDef.slots;
export default class Minimize extends SvelteComponentTyped<MinimizeProps, MinimizeEvents, MinimizeSlots> {
}
export {};

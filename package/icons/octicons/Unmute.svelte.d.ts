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
export type UnmuteProps = typeof __propDef.props;
export type UnmuteEvents = typeof __propDef.events;
export type UnmuteSlots = typeof __propDef.slots;
export default class Unmute extends SvelteComponentTyped<UnmuteProps, UnmuteEvents, UnmuteSlots> {
}
export {};

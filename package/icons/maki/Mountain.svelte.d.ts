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
export type MountainProps = typeof __propDef.props;
export type MountainEvents = typeof __propDef.events;
export type MountainSlots = typeof __propDef.slots;
export default class Mountain extends SvelteComponentTyped<MountainProps, MountainEvents, MountainSlots> {
}
export {};

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
export type UnverifiedProps = typeof __propDef.props;
export type UnverifiedEvents = typeof __propDef.events;
export type UnverifiedSlots = typeof __propDef.slots;
export default class Unverified extends SvelteComponentTyped<UnverifiedProps, UnverifiedEvents, UnverifiedSlots> {
}
export {};

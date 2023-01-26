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
export type InstagramProps = typeof __propDef.props;
export type InstagramEvents = typeof __propDef.events;
export type InstagramSlots = typeof __propDef.slots;
export default class Instagram extends SvelteComponentTyped<InstagramProps, InstagramEvents, InstagramSlots> {
}
export {};

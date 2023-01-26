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
export type ShareProps = typeof __propDef.props;
export type ShareEvents = typeof __propDef.events;
export type ShareSlots = typeof __propDef.slots;
export default class Share extends SvelteComponentTyped<ShareProps, ShareEvents, ShareSlots> {
}
export {};

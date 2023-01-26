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
export type ShareAndroidProps = typeof __propDef.props;
export type ShareAndroidEvents = typeof __propDef.events;
export type ShareAndroidSlots = typeof __propDef.slots;
export default class ShareAndroid extends SvelteComponentTyped<ShareAndroidProps, ShareAndroidEvents, ShareAndroidSlots> {
}
export {};

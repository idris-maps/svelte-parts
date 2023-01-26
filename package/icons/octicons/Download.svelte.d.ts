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
export type DownloadProps = typeof __propDef.props;
export type DownloadEvents = typeof __propDef.events;
export type DownloadSlots = typeof __propDef.slots;
export default class Download extends SvelteComponentTyped<DownloadProps, DownloadEvents, DownloadSlots> {
}
export {};

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
export type DownloadCloudProps = typeof __propDef.props;
export type DownloadCloudEvents = typeof __propDef.events;
export type DownloadCloudSlots = typeof __propDef.slots;
export default class DownloadCloud extends SvelteComponentTyped<DownloadCloudProps, DownloadCloudEvents, DownloadCloudSlots> {
}
export {};

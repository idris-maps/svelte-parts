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
export type DesktopDownloadProps = typeof __propDef.props;
export type DesktopDownloadEvents = typeof __propDef.events;
export type DesktopDownloadSlots = typeof __propDef.slots;
export default class DesktopDownload extends SvelteComponentTyped<DesktopDownloadProps, DesktopDownloadEvents, DesktopDownloadSlots> {
}
export {};

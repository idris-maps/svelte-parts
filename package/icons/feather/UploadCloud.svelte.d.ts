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
export type UploadCloudProps = typeof __propDef.props;
export type UploadCloudEvents = typeof __propDef.events;
export type UploadCloudSlots = typeof __propDef.slots;
export default class UploadCloud extends SvelteComponentTyped<UploadCloudProps, UploadCloudEvents, UploadCloudSlots> {
}
export {};

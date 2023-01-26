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
export type UploadProps = typeof __propDef.props;
export type UploadEvents = typeof __propDef.events;
export type UploadSlots = typeof __propDef.slots;
export default class Upload extends SvelteComponentTyped<UploadProps, UploadEvents, UploadSlots> {
}
export {};

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
export type FileTextProps = typeof __propDef.props;
export type FileTextEvents = typeof __propDef.events;
export type FileTextSlots = typeof __propDef.slots;
export default class FileText extends SvelteComponentTyped<FileTextProps, FileTextEvents, FileTextSlots> {
}
export {};

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
export type SaveProps = typeof __propDef.props;
export type SaveEvents = typeof __propDef.events;
export type SaveSlots = typeof __propDef.slots;
export default class Save extends SvelteComponentTyped<SaveProps, SaveEvents, SaveSlots> {
}
export {};

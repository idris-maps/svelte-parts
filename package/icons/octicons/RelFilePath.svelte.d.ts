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
export type RelFilePathProps = typeof __propDef.props;
export type RelFilePathEvents = typeof __propDef.events;
export type RelFilePathSlots = typeof __propDef.slots;
export default class RelFilePath extends SvelteComponentTyped<RelFilePathProps, RelFilePathEvents, RelFilePathSlots> {
}
export {};

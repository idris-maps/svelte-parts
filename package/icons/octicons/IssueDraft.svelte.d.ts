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
export type IssueDraftProps = typeof __propDef.props;
export type IssueDraftEvents = typeof __propDef.events;
export type IssueDraftSlots = typeof __propDef.slots;
export default class IssueDraft extends SvelteComponentTyped<IssueDraftProps, IssueDraftEvents, IssueDraftSlots> {
}
export {};

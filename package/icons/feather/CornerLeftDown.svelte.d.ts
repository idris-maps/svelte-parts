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
export type CornerLeftDownProps = typeof __propDef.props;
export type CornerLeftDownEvents = typeof __propDef.events;
export type CornerLeftDownSlots = typeof __propDef.slots;
export default class CornerLeftDown extends SvelteComponentTyped<CornerLeftDownProps, CornerLeftDownEvents, CornerLeftDownSlots> {
}
export {};

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
export type CornerLeftUpProps = typeof __propDef.props;
export type CornerLeftUpEvents = typeof __propDef.events;
export type CornerLeftUpSlots = typeof __propDef.slots;
export default class CornerLeftUp extends SvelteComponentTyped<CornerLeftUpProps, CornerLeftUpEvents, CornerLeftUpSlots> {
}
export {};

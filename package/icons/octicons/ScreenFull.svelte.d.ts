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
export type ScreenFullProps = typeof __propDef.props;
export type ScreenFullEvents = typeof __propDef.events;
export type ScreenFullSlots = typeof __propDef.slots;
export default class ScreenFull extends SvelteComponentTyped<ScreenFullProps, ScreenFullEvents, ScreenFullSlots> {
}
export {};

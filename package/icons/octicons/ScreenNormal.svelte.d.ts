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
export type ScreenNormalProps = typeof __propDef.props;
export type ScreenNormalEvents = typeof __propDef.events;
export type ScreenNormalSlots = typeof __propDef.slots;
export default class ScreenNormal extends SvelteComponentTyped<ScreenNormalProps, ScreenNormalEvents, ScreenNormalSlots> {
}
export {};

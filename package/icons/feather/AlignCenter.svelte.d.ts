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
export type AlignCenterProps = typeof __propDef.props;
export type AlignCenterEvents = typeof __propDef.events;
export type AlignCenterSlots = typeof __propDef.slots;
export default class AlignCenter extends SvelteComponentTyped<AlignCenterProps, AlignCenterEvents, AlignCenterSlots> {
}
export {};

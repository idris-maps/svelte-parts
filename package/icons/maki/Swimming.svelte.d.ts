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
export type SwimmingProps = typeof __propDef.props;
export type SwimmingEvents = typeof __propDef.events;
export type SwimmingSlots = typeof __propDef.slots;
export default class Swimming extends SvelteComponentTyped<SwimmingProps, SwimmingEvents, SwimmingSlots> {
}
export {};

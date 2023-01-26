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
export type FeatherProps = typeof __propDef.props;
export type FeatherEvents = typeof __propDef.events;
export type FeatherSlots = typeof __propDef.slots;
export default class Feather extends SvelteComponentTyped<FeatherProps, FeatherEvents, FeatherSlots> {
}
export {};

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
export type NaturalProps = typeof __propDef.props;
export type NaturalEvents = typeof __propDef.events;
export type NaturalSlots = typeof __propDef.slots;
export default class Natural extends SvelteComponentTyped<NaturalProps, NaturalEvents, NaturalSlots> {
}
export {};

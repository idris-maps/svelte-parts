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
export type TollProps = typeof __propDef.props;
export type TollEvents = typeof __propDef.events;
export type TollSlots = typeof __propDef.slots;
export default class Toll extends SvelteComponentTyped<TollProps, TollEvents, TollSlots> {
}
export {};

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
export type TypeProps = typeof __propDef.props;
export type TypeEvents = typeof __propDef.events;
export type TypeSlots = typeof __propDef.slots;
export default class Type extends SvelteComponentTyped<TypeProps, TypeEvents, TypeSlots> {
}
export {};

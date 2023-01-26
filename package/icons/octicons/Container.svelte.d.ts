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
export type ContainerProps = typeof __propDef.props;
export type ContainerEvents = typeof __propDef.events;
export type ContainerSlots = typeof __propDef.slots;
export default class Container extends SvelteComponentTyped<ContainerProps, ContainerEvents, ContainerSlots> {
}
export {};

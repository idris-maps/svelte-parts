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
export type ZooProps = typeof __propDef.props;
export type ZooEvents = typeof __propDef.events;
export type ZooSlots = typeof __propDef.slots;
export default class Zoo extends SvelteComponentTyped<ZooProps, ZooEvents, ZooSlots> {
}
export {};

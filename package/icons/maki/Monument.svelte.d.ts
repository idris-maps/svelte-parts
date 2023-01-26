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
export type MonumentProps = typeof __propDef.props;
export type MonumentEvents = typeof __propDef.events;
export type MonumentSlots = typeof __propDef.slots;
export default class Monument extends SvelteComponentTyped<MonumentProps, MonumentEvents, MonumentSlots> {
}
export {};

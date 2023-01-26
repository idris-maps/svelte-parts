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
export type MonumentJpProps = typeof __propDef.props;
export type MonumentJpEvents = typeof __propDef.events;
export type MonumentJpSlots = typeof __propDef.slots;
export default class MonumentJp extends SvelteComponentTyped<MonumentJpProps, MonumentJpEvents, MonumentJpSlots> {
}
export {};

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
export type CodescanProps = typeof __propDef.props;
export type CodescanEvents = typeof __propDef.events;
export type CodescanSlots = typeof __propDef.slots;
export default class Codescan extends SvelteComponentTyped<CodescanProps, CodescanEvents, CodescanSlots> {
}
export {};

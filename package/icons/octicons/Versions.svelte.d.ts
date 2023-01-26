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
export type VersionsProps = typeof __propDef.props;
export type VersionsEvents = typeof __propDef.events;
export type VersionsSlots = typeof __propDef.slots;
export default class Versions extends SvelteComponentTyped<VersionsProps, VersionsEvents, VersionsSlots> {
}
export {};

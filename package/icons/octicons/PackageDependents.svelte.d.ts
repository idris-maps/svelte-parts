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
export type PackageDependentsProps = typeof __propDef.props;
export type PackageDependentsEvents = typeof __propDef.events;
export type PackageDependentsSlots = typeof __propDef.slots;
export default class PackageDependents extends SvelteComponentTyped<PackageDependentsProps, PackageDependentsEvents, PackageDependentsSlots> {
}
export {};

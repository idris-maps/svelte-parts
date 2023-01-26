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
export type PackageDependenciesProps = typeof __propDef.props;
export type PackageDependenciesEvents = typeof __propDef.events;
export type PackageDependenciesSlots = typeof __propDef.slots;
export default class PackageDependencies extends SvelteComponentTyped<PackageDependenciesProps, PackageDependenciesEvents, PackageDependenciesSlots> {
}
export {};

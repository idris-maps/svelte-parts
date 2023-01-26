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
export type DependabotProps = typeof __propDef.props;
export type DependabotEvents = typeof __propDef.events;
export type DependabotSlots = typeof __propDef.slots;
export default class Dependabot extends SvelteComponentTyped<DependabotProps, DependabotEvents, DependabotSlots> {
}
export {};

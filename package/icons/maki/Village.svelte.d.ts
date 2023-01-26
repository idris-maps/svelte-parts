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
export type VillageProps = typeof __propDef.props;
export type VillageEvents = typeof __propDef.events;
export type VillageSlots = typeof __propDef.slots;
export default class Village extends SvelteComponentTyped<VillageProps, VillageEvents, VillageSlots> {
}
export {};

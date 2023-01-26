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
export type LanduseProps = typeof __propDef.props;
export type LanduseEvents = typeof __propDef.events;
export type LanduseSlots = typeof __propDef.slots;
export default class Landuse extends SvelteComponentTyped<LanduseProps, LanduseEvents, LanduseSlots> {
}
export {};

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
export type HardDriveProps = typeof __propDef.props;
export type HardDriveEvents = typeof __propDef.events;
export type HardDriveSlots = typeof __propDef.slots;
export default class HardDrive extends SvelteComponentTyped<HardDriveProps, HardDriveEvents, HardDriveSlots> {
}
export {};

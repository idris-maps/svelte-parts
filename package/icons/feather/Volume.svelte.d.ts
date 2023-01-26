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
export type VolumeProps = typeof __propDef.props;
export type VolumeEvents = typeof __propDef.events;
export type VolumeSlots = typeof __propDef.slots;
export default class Volume extends SvelteComponentTyped<VolumeProps, VolumeEvents, VolumeSlots> {
}
export {};

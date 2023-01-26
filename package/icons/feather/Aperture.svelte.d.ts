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
export type ApertureProps = typeof __propDef.props;
export type ApertureEvents = typeof __propDef.events;
export type ApertureSlots = typeof __propDef.slots;
export default class Aperture extends SvelteComponentTyped<ApertureProps, ApertureEvents, ApertureSlots> {
}
export {};

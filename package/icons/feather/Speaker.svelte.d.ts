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
export type SpeakerProps = typeof __propDef.props;
export type SpeakerEvents = typeof __propDef.events;
export type SpeakerSlots = typeof __propDef.slots;
export default class Speaker extends SvelteComponentTyped<SpeakerProps, SpeakerEvents, SpeakerSlots> {
}
export {};

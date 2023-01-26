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
export type VoicemailProps = typeof __propDef.props;
export type VoicemailEvents = typeof __propDef.events;
export type VoicemailSlots = typeof __propDef.slots;
export default class Voicemail extends SvelteComponentTyped<VoicemailProps, VoicemailEvents, VoicemailSlots> {
}
export {};

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
export type PaperAirplaneProps = typeof __propDef.props;
export type PaperAirplaneEvents = typeof __propDef.events;
export type PaperAirplaneSlots = typeof __propDef.slots;
export default class PaperAirplane extends SvelteComponentTyped<PaperAirplaneProps, PaperAirplaneEvents, PaperAirplaneSlots> {
}
export {};

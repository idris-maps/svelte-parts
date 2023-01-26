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
export type EmbassyProps = typeof __propDef.props;
export type EmbassyEvents = typeof __propDef.events;
export type EmbassySlots = typeof __propDef.slots;
export default class Embassy extends SvelteComponentTyped<EmbassyProps, EmbassyEvents, EmbassySlots> {
}
export {};

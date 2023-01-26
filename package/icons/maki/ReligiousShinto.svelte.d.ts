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
export type ReligiousShintoProps = typeof __propDef.props;
export type ReligiousShintoEvents = typeof __propDef.events;
export type ReligiousShintoSlots = typeof __propDef.slots;
export default class ReligiousShinto extends SvelteComponentTyped<ReligiousShintoProps, ReligiousShintoEvents, ReligiousShintoSlots> {
}
export {};

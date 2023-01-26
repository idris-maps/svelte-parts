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
export type ReligiousJewishProps = typeof __propDef.props;
export type ReligiousJewishEvents = typeof __propDef.events;
export type ReligiousJewishSlots = typeof __propDef.slots;
export default class ReligiousJewish extends SvelteComponentTyped<ReligiousJewishProps, ReligiousJewishEvents, ReligiousJewishSlots> {
}
export {};

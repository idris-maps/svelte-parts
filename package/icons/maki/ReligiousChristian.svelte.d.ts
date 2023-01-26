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
export type ReligiousChristianProps = typeof __propDef.props;
export type ReligiousChristianEvents = typeof __propDef.events;
export type ReligiousChristianSlots = typeof __propDef.slots;
export default class ReligiousChristian extends SvelteComponentTyped<ReligiousChristianProps, ReligiousChristianEvents, ReligiousChristianSlots> {
}
export {};

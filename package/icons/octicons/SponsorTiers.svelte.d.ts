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
export type SponsorTiersProps = typeof __propDef.props;
export type SponsorTiersEvents = typeof __propDef.events;
export type SponsorTiersSlots = typeof __propDef.slots;
export default class SponsorTiers extends SvelteComponentTyped<SponsorTiersProps, SponsorTiersEvents, SponsorTiersSlots> {
}
export {};

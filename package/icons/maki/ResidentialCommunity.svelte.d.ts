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
export type ResidentialCommunityProps = typeof __propDef.props;
export type ResidentialCommunityEvents = typeof __propDef.events;
export type ResidentialCommunitySlots = typeof __propDef.slots;
export default class ResidentialCommunity extends SvelteComponentTyped<ResidentialCommunityProps, ResidentialCommunityEvents, ResidentialCommunitySlots> {
}
export {};

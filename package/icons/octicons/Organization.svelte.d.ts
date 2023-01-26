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
export type OrganizationProps = typeof __propDef.props;
export type OrganizationEvents = typeof __propDef.events;
export type OrganizationSlots = typeof __propDef.slots;
export default class Organization extends SvelteComponentTyped<OrganizationProps, OrganizationEvents, OrganizationSlots> {
}
export {};

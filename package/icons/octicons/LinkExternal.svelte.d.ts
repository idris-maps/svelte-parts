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
export type LinkExternalProps = typeof __propDef.props;
export type LinkExternalEvents = typeof __propDef.events;
export type LinkExternalSlots = typeof __propDef.slots;
export default class LinkExternal extends SvelteComponentTyped<LinkExternalProps, LinkExternalEvents, LinkExternalSlots> {
}
export {};

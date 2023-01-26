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
export type PicnicSiteProps = typeof __propDef.props;
export type PicnicSiteEvents = typeof __propDef.events;
export type PicnicSiteSlots = typeof __propDef.slots;
export default class PicnicSite extends SvelteComponentTyped<PicnicSiteProps, PicnicSiteEvents, PicnicSiteSlots> {
}
export {};

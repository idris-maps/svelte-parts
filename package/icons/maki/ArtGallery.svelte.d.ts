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
export type ArtGalleryProps = typeof __propDef.props;
export type ArtGalleryEvents = typeof __propDef.events;
export type ArtGallerySlots = typeof __propDef.slots;
export default class ArtGallery extends SvelteComponentTyped<ArtGalleryProps, ArtGalleryEvents, ArtGallerySlots> {
}
export {};

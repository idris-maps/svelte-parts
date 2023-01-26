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
export type Share2Props = typeof __propDef.props;
export type Share2Events = typeof __propDef.events;
export type Share2Slots = typeof __propDef.slots;
export default class Share2 extends SvelteComponentTyped<Share2Props, Share2Events, Share2Slots> {
}
export {};

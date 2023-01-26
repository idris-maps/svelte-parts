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
export type Link2Props = typeof __propDef.props;
export type Link2Events = typeof __propDef.events;
export type Link2Slots = typeof __propDef.slots;
export default class Link2 extends SvelteComponentTyped<Link2Props, Link2Events, Link2Slots> {
}
export {};

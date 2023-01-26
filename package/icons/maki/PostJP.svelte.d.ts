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
export type PostJpProps = typeof __propDef.props;
export type PostJpEvents = typeof __propDef.events;
export type PostJpSlots = typeof __propDef.slots;
export default class PostJp extends SvelteComponentTyped<PostJpProps, PostJpEvents, PostJpSlots> {
}
export {};

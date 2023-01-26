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
export type PostProps = typeof __propDef.props;
export type PostEvents = typeof __propDef.events;
export type PostSlots = typeof __propDef.slots;
export default class Post extends SvelteComponentTyped<PostProps, PostEvents, PostSlots> {
}
export {};

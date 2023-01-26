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
export type LinkedinProps = typeof __propDef.props;
export type LinkedinEvents = typeof __propDef.events;
export type LinkedinSlots = typeof __propDef.slots;
export default class Linkedin extends SvelteComponentTyped<LinkedinProps, LinkedinEvents, LinkedinSlots> {
}
export {};

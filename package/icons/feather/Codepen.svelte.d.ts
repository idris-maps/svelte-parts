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
export type CodepenProps = typeof __propDef.props;
export type CodepenEvents = typeof __propDef.events;
export type CodepenSlots = typeof __propDef.slots;
export default class Codepen extends SvelteComponentTyped<CodepenProps, CodepenEvents, CodepenSlots> {
}
export {};

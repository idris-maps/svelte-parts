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
export type QuestionProps = typeof __propDef.props;
export type QuestionEvents = typeof __propDef.events;
export type QuestionSlots = typeof __propDef.slots;
export default class Question extends SvelteComponentTyped<QuestionProps, QuestionEvents, QuestionSlots> {
}
export {};

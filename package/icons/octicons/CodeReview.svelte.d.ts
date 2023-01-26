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
export type CodeReviewProps = typeof __propDef.props;
export type CodeReviewEvents = typeof __propDef.events;
export type CodeReviewSlots = typeof __propDef.slots;
export default class CodeReview extends SvelteComponentTyped<CodeReviewProps, CodeReviewEvents, CodeReviewSlots> {
}
export {};

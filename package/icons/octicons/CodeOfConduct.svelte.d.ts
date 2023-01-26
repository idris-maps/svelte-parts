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
export type CodeOfConductProps = typeof __propDef.props;
export type CodeOfConductEvents = typeof __propDef.events;
export type CodeOfConductSlots = typeof __propDef.slots;
export default class CodeOfConduct extends SvelteComponentTyped<CodeOfConductProps, CodeOfConductEvents, CodeOfConductSlots> {
}
export {};

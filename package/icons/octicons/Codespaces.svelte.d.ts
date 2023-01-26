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
export type CodespacesProps = typeof __propDef.props;
export type CodespacesEvents = typeof __propDef.events;
export type CodespacesSlots = typeof __propDef.slots;
export default class Codespaces extends SvelteComponentTyped<CodespacesProps, CodespacesEvents, CodespacesSlots> {
}
export {};

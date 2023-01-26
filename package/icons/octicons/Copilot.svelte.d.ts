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
export type CopilotProps = typeof __propDef.props;
export type CopilotEvents = typeof __propDef.events;
export type CopilotSlots = typeof __propDef.slots;
export default class Copilot extends SvelteComponentTyped<CopilotProps, CopilotEvents, CopilotSlots> {
}
export {};

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
export type CodesandboxProps = typeof __propDef.props;
export type CodesandboxEvents = typeof __propDef.events;
export type CodesandboxSlots = typeof __propDef.slots;
export default class Codesandbox extends SvelteComponentTyped<CodesandboxProps, CodesandboxEvents, CodesandboxSlots> {
}
export {};

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
export type InformationProps = typeof __propDef.props;
export type InformationEvents = typeof __propDef.events;
export type InformationSlots = typeof __propDef.slots;
export default class Information extends SvelteComponentTyped<InformationProps, InformationEvents, InformationSlots> {
}
export {};

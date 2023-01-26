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
export type BaseballProps = typeof __propDef.props;
export type BaseballEvents = typeof __propDef.events;
export type BaseballSlots = typeof __propDef.slots;
export default class Baseball extends SvelteComponentTyped<BaseballProps, BaseballEvents, BaseballSlots> {
}
export {};

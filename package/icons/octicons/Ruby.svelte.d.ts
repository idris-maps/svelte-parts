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
export type RubyProps = typeof __propDef.props;
export type RubyEvents = typeof __propDef.events;
export type RubySlots = typeof __propDef.slots;
export default class Ruby extends SvelteComponentTyped<RubyProps, RubyEvents, RubySlots> {
}
export {};

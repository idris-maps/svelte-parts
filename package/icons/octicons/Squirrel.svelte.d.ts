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
export type SquirrelProps = typeof __propDef.props;
export type SquirrelEvents = typeof __propDef.events;
export type SquirrelSlots = typeof __propDef.slots;
export default class Squirrel extends SvelteComponentTyped<SquirrelProps, SquirrelEvents, SquirrelSlots> {
}
export {};

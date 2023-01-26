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
export type TeahouseProps = typeof __propDef.props;
export type TeahouseEvents = typeof __propDef.events;
export type TeahouseSlots = typeof __propDef.slots;
export default class Teahouse extends SvelteComponentTyped<TeahouseProps, TeahouseEvents, TeahouseSlots> {
}
export {};

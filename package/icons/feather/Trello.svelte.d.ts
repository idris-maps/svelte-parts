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
export type TrelloProps = typeof __propDef.props;
export type TrelloEvents = typeof __propDef.events;
export type TrelloSlots = typeof __propDef.slots;
export default class Trello extends SvelteComponentTyped<TrelloProps, TrelloEvents, TrelloSlots> {
}
export {};

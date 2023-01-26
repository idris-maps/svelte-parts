/** @typedef {typeof __propDef.props}  FallbackSvgProps */
/** @typedef {typeof __propDef.events}  FallbackSvgEvents */
/** @typedef {typeof __propDef.slots}  FallbackSvgSlots */
export default class FallbackSvg extends SvelteComponentTyped<{
    over?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type FallbackSvgProps = typeof __propDef.props;
export type FallbackSvgEvents = typeof __propDef.events;
export type FallbackSvgSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        over?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};

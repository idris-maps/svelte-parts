
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const USER: string;
	export const npm_config_user_agent: string;
	export const XDG_SEAT: string;
	export const SSH_AGENT_PID: string;
	export const XDG_SESSION_TYPE: string;
	export const npm_node_execpath: string;
	export const QT_PLATFORMTHEME: string;
	export const SHLVL: string;
	export const npm_config_noproxy: string;
	export const HOME: string;
	export const OLDPWD: string;
	export const DESKTOP_SESSION: string;
	export const NVM_BIN: string;
	export const npm_package_json: string;
	export const NVM_INC: string;
	export const TINT2_BUTTON_W: string;
	export const XDG_SEAT_PATH: string;
	export const TINT2_BUTTON_X: string;
	export const npm_config_userconfig: string;
	export const npm_config_local_prefix: string;
	export const TINT2_BUTTON_Y: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const COLORTERM: string;
	export const COLOR: string;
	export const NVM_DIR: string;
	export const npm_config_metrics_registry: string;
	export const QT_QPA_PLATFORMTHEME: string;
	export const TINT2_BUTTON_PANEL_X1: string;
	export const LOGNAME: string;
	export const WINDOWID: string;
	export const TINT2_BUTTON_PANEL_X2: string;
	export const TINT2_BUTTON_PANEL_Y1: string;
	export const _: string;
	export const npm_config_prefix: string;
	export const XDG_SESSION_CLASS: string;
	export const TINT2_BUTTON_PANEL_Y2: string;
	export const TERM: string;
	export const XDG_SESSION_ID: string;
	export const npm_config_cache: string;
	export const TINT2_BUTTON_ALIGNED_X: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const GDM_LANG: string;
	export const PAPERSIZE: string;
	export const TINT2_BUTTON_ALIGNED_Y: string;
	export const NODE: string;
	export const npm_package_name: string;
	export const XDG_SESSION_PATH: string;
	export const XDG_RUNTIME_DIR: string;
	export const TINT2_CONFIG: string;
	export const DENO_INSTALL: string;
	export const DISPLAY: string;
	export const LANG: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XAUTHORITY: string;
	export const LS_COLORS: string;
	export const npm_lifecycle_script: string;
	export const SSH_AUTH_SOCK: string;
	export const XDG_GREETER_DATA_DIR: string;
	export const SHELL: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const QT_ACCESSIBILITY: string;
	export const GDMSESSION: string;
	export const TINT2_BUTTON_ALIGNED_X1: string;
	export const TINT2_BUTTON_ALIGNED_Y1: string;
	export const GPG_AGENT_INFO: string;
	export const TINT2_BUTTON_ALIGNED_X2: string;
	export const TINT2_BUTTON_ALIGNED_Y2: string;
	export const XDG_VTNR: string;
	export const npm_config_globalconfig: string;
	export const npm_config_init_module: string;
	export const PWD: string;
	export const TINT2_BUTTON_H: string;
	export const npm_execpath: string;
	export const NVM_CD_FLAGS: string;
	export const XDG_DATA_DIRS: string;
	export const npm_config_global_prefix: string;
	export const npm_command: string;
	export const QT_PLATFORM_PLUGIN: string;
	export const VTE_VERSION: string;
	export const INIT_CWD: string;
	export const EDITOR: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {

}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		USER: string;
		npm_config_user_agent: string;
		XDG_SEAT: string;
		SSH_AGENT_PID: string;
		XDG_SESSION_TYPE: string;
		npm_node_execpath: string;
		QT_PLATFORMTHEME: string;
		SHLVL: string;
		npm_config_noproxy: string;
		HOME: string;
		OLDPWD: string;
		DESKTOP_SESSION: string;
		NVM_BIN: string;
		npm_package_json: string;
		NVM_INC: string;
		TINT2_BUTTON_W: string;
		XDG_SEAT_PATH: string;
		TINT2_BUTTON_X: string;
		npm_config_userconfig: string;
		npm_config_local_prefix: string;
		TINT2_BUTTON_Y: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		COLORTERM: string;
		COLOR: string;
		NVM_DIR: string;
		npm_config_metrics_registry: string;
		QT_QPA_PLATFORMTHEME: string;
		TINT2_BUTTON_PANEL_X1: string;
		LOGNAME: string;
		WINDOWID: string;
		TINT2_BUTTON_PANEL_X2: string;
		TINT2_BUTTON_PANEL_Y1: string;
		_: string;
		npm_config_prefix: string;
		XDG_SESSION_CLASS: string;
		TINT2_BUTTON_PANEL_Y2: string;
		TERM: string;
		XDG_SESSION_ID: string;
		npm_config_cache: string;
		TINT2_BUTTON_ALIGNED_X: string;
		npm_config_node_gyp: string;
		PATH: string;
		GDM_LANG: string;
		PAPERSIZE: string;
		TINT2_BUTTON_ALIGNED_Y: string;
		NODE: string;
		npm_package_name: string;
		XDG_SESSION_PATH: string;
		XDG_RUNTIME_DIR: string;
		TINT2_CONFIG: string;
		DENO_INSTALL: string;
		DISPLAY: string;
		LANG: string;
		XDG_SESSION_DESKTOP: string;
		XAUTHORITY: string;
		LS_COLORS: string;
		npm_lifecycle_script: string;
		SSH_AUTH_SOCK: string;
		XDG_GREETER_DATA_DIR: string;
		SHELL: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		QT_ACCESSIBILITY: string;
		GDMSESSION: string;
		TINT2_BUTTON_ALIGNED_X1: string;
		TINT2_BUTTON_ALIGNED_Y1: string;
		GPG_AGENT_INFO: string;
		TINT2_BUTTON_ALIGNED_X2: string;
		TINT2_BUTTON_ALIGNED_Y2: string;
		XDG_VTNR: string;
		npm_config_globalconfig: string;
		npm_config_init_module: string;
		PWD: string;
		TINT2_BUTTON_H: string;
		npm_execpath: string;
		NVM_CD_FLAGS: string;
		XDG_DATA_DIRS: string;
		npm_config_global_prefix: string;
		npm_command: string;
		QT_PLATFORM_PLUGIN: string;
		VTE_VERSION: string;
		INIT_CWD: string;
		EDITOR: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}

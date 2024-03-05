/**
 * An array of routes that do not require authentication
 * @type {string[]}
 */
export const publicRoutes = [
    "/",
    "/tos"
];

/**
 * An array of routes that are used for authentication
 * Logged in users will be redirected to /settings
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/login",
    "/auth/register",
]

/**
 * The prefix for API authentication routes
 * This route is used for authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth"


/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings"

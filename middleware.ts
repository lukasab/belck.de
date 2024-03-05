import authConfig from "@/auth.config";
import NextAuth from "next-auth";

import { DEFAULT_LOGIN_REDIRECT, apiAuthPrefix, authRoutes, publicRoutes} from "@/route";
const { auth } = NextAuth(authConfig)

export default auth((req) => {
    const { nextUrl } = req;  
    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    
    if (isApiAuthRoute) {
        return undefined;
    }
    
    const isLoggedIn = !!req.auth;
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);
    
    if (isAuthRoute) {
        if (isLoggedIn) {
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
        }
        return undefined;
    }

    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);

    if (!isLoggedIn && !isPublicRoute) {
        return Response.redirect(new URL("/auth/login", nextUrl));
    }

    return undefined;

})

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
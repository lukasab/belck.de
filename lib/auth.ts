import type { NextAuthOptions } from "next-auth"
import prisma from '@/lib/prisma';
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter"

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
    EmailProvider({
        server: {
            host: process.env.EMAIL_SERVER_HOST,
            port: process.env.EMAIL_SERVER_PORT,
            auth: {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD
            }
        },
        from: process.env.EMAIL_FROM
        }),
    GoogleProvider({
        clientId: process.env.AUTH_GOOGLE_ID as string,
        clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
    }),
    ],
} satisfies NextAuthOptions;
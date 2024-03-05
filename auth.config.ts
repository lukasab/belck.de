import bcrypt from "bcryptjs"
import Credentials from "next-auth/providers/credentials"

import type { NextAuthConfig } from "next-auth"
import { LoginSchema } from "@/schemas"
import db from "@/lib/prisma"

export default {
  providers: [Credentials({
    async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials)
    
        if (validatedFields.success) {
            const { email, password } = validatedFields.data
            
            const user = await db.user.findUnique({
                where: {
                    email,
                }
            });

            // TODO: remove the check of password in the future
            if (!user || !user.hashedPassword) return null;

            const passwordMatch = await bcrypt.compare(
                password,
                user.hashedPassword,
            );

            if (passwordMatch) return user;
        }

        return null;
    }
  })],
} satisfies NextAuthConfig

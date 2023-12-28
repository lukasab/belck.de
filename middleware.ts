import { withAuth } from "next-auth/middleware"

export const config = { matcher: ["/poker/:path*"] }
export default withAuth({
  // Matches the pages config in `[...nextauth]`
  pages: {
    signIn: '/auth/signin',
  }
})
import {AuthOptions, User} from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"

export const authConfig: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID! || "750328625141-mp9f99753car31gj3447b9ng7ealrq8b.apps.googleusercontent.com",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET! || "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"
        }),
        Credentials({
            credentials: {
                email: {
                    label: "email", type: "email", required: true
                },
                password: {
                    label: "password", type: "password", required: true
                }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null
                return {name: "Guest", email: credentials.email} as User
            }
        })
    ]
}
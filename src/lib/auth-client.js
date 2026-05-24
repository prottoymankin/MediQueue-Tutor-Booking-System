import { jwtClient } from "better-auth/client/plugins"
import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://medi-queue-tutor-booking-system-iota.vercel.app",
    plugins: [
        jwtClient()
    ]
})
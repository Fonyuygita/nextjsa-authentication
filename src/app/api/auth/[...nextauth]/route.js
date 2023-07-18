              

import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

 const MyProviders=NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRETE,
        })
    ]
})

// make our providers available to the rest of the application
export  {MyProviders as GET, MyProviders as POST}
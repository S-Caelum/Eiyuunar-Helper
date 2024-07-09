import NextAuth from "next-auth/next";
import Discord from "next-auth/providers/discord";

const scopes = ['identify', 'guilds', 'guilds.members.read'].join(' ')

const handler = NextAuth({
    session: {
        strategy: 'jwt',
    },
    providers: [
        Discord({
            clientId: process.env.DISCORD_ID!,
            clientSecret: process.env.DISCORD_SECRET!,
            authorization: {params: {scope:scopes}},

            async profile(profile, tokens) {
                let isAuthorized = false;
                let isGM = false;
                const response = await fetch(`https://discord.com/api/users/@me/guilds`, {
                    headers: {
                        Authorization: `Bearer ${tokens.access_token}`
                    }
                })
                const guilds = await response.json();
                const targetGuild = guilds.find(
                    (guild:any) => guild.id === process.env.DISCORD_SERVER
                )
                if (targetGuild) {
                    isAuthorized = true;
                    const memberResponse = await fetch(`https://discord.com/api/users/@me/guilds/${process.env.DISCORD_SERVER}/member`, {
                        headers: {
                            Authorization: `Bearer ${tokens.access_token}`
                        },
                    })
                    const memberData = await memberResponse.json();
                    isGM = isAuthorized && memberData.roles.includes(process.env.DISCORD_HEAD_ROLE)
                    const isExist = await fetch(`http://localhost:3000/api/user/${memberData.user.global_name}`)
                    const IsEx = await isExist.json();
                    if (IsEx === null) {
                        await fetch("http://localhost:3000/api/user", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application.json"
                            },
                            body: JSON.stringify({
                                Name: memberData.user.global_name,
                                isGameMaster: isGM
                            })
                        })
                    }
                }
                return {
                    id: profile.id,
                    name: profile.global_name,
                    image: `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png`,
                    role: isGM,
                    status: isAuthorized,
                }
            }
        })
    ],
    callbacks: {
        async jwt({token, user}:any) {
            if (user) {
                token.role = user.role;
                token.status = user.status
            }
            return {...token, ...user}
        },
        async session({session, token}: any) {
            session.user.role = token.role;
            return session
        }
    },
    pages: {
        signIn: 'http://localhost:3000',
        error: 'http://localhost:3000'
    }
})

export { handler as GET, handler as POST }
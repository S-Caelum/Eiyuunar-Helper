declare module "next-auth" {
    interface User {
        role?: boolean;
        status?: boolean;
    }
    interface Session extends DedaultSession {
        user?: User;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        role?: boolean;
        status?: boolean,
    }
}
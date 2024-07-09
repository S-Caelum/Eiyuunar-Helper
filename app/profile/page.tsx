async function GetUserList() {
    const users = await fetch(`http://localhost:3000/api/user`,{
        next: {revalidate: 300}
    });
    if (!users) {
        throw new Error();
    }
    return users.json();
}

export default async function Page() {
    const UserList = await GetUserList();
    console.log(UserList);
    return (
        <main className="z-20 pb-16 flex flex-col items-center justify-between text-white">
            <section className="flex flex-col items-center justify-between">
                <h1 className="mt-8 text-lg sm:text-2xl lg:text-3xl font-bold">
                PROJECT:  Eiyuunar
                </h1>
            </section>
        </main>
    )
}
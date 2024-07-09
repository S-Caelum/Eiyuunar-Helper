import Image from "next/image";
import Link from "next/link";

export async function GetUser(name) {
    const user = await fetch(`http://localhost:3000/api/user/${name}`, {
        next: {revalidate: 300 },
    });
    if (!user.ok) {
        throw new Error();
    }
    return user.json();
}

export default async function Page({params}) {
    const user = await GetUser(params.name);
    return (
        <main className="z-20 pb-16 flex flex-col items-center justify-between text-white">
            <section className="flex flex-row mt-10 items-center justify-between">
                <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold">
                    {user.Name}
                </h1>
            </section>
            <h2 className="mt-24 text-xl"> Персонажи </h2>
            <div className="flex flex-col md:flex-row mt-8 w-11/12 p-8 flex-wrap justify-between rounded-lg bg-neutral-800/50">
                    {user.Characters && (
                        user.Characters.map(({name, portrait}, id) => {
                            return (
                                <div className="w-3/12 h-12 ring-1" key={id}>

                                </div>
                            )
                        })
                    )}
                    <Link href="http://localhost:3000/character-creation" className="w-3/12 h-24 ring-1 ring-white/20 rounded-lg flex justify-center items-center bg-neutral-700/30">
                        <p className=" text-xl"> Новый персонаж </p>
                    </Link>
            </div>
            <h2 className="mt-24 text-xl"> Записи    </h2>
            <section className="flex flex-col mt-8 w-11/12 p-8 flex-wrap justify-between rounded-lg bg-neutral-800/50">
            {user.Characters && (
                user.Characters.map(({name, portrait}, id) => {
                    return (
                        <div className="w-3/12 h-12 ring-1" key={id}>

                        </div>
                        )
                    })
                )}
                <Link href="http://localhost:3000/character-creation" className="w-3/12 h-24 ring-1 ring-white/20 rounded-lg flex justify-center items-center bg-neutral-700/30">
                    <p className=" text-xl"> Новый персонаж </p>
                </Link> 
            </section>
        </main>
    )
}
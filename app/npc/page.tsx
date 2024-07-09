import SearchBar from '../(components)/SearchBar'

const chars = [
    {
        name: "Selene"
    },
    {
        name: "Selene"
    },
    {
        name: "Selene"
    },
    {
        name: "Selene"
    },
    {
        name: "Selene"
    },
    {
        name: "Selene"
    },
    {
        name: "Selene"
    },
    {
        name: "Selene"
    },
    {
        name: "Selene"
    },    {
        name: "Selene"
    },
    {
        name: "Selene"
    },    {
        name: "Selene"
    },
    {
        name: "Selene"
    },
    {
        name: "Selene"
    },    {
        name: "Selene"
    },    {
        name: "Selene"
    },    {
        name: "Selene"
    },    {
        name: "Selene"
    },    {
        name: "Selene"
    },    {
        name: "Selene"
    },    {
        name: "Selene"
    },    {
        name: "Selene"
    },    {
        name: "Selene"
    },    {
        name: "Selene"
    },    {
        name: "Selene"
    },    {
        name: "Selene"
    },    {
        name: "Selene"
    },
]

export default function Page() {
    return (
        // Преполагается страница со всеми встеченными NPC в игре.
        // Для лучшего отображения будет добавлен поиск, а также фильтрация по региону, откуда происходит персонаж
        <main className="z-20 pb-16 flex flex-col items-center justify-between text-white">
            <h1 className="mt-16 text-lg sm:text-2xl lg:text-3xl font-bold">
                Персонажи
            </h1>
            <SearchBar/>
            <section className='flex flex-wrap w-11/12 justify-center mt-4'>
                    {chars.map(({name}, id) => {
                    return (
                        <div className='w-2/12 p-3 h-24 rounded-md ring-1 m-2' key={id}>
                            <p>{name}</p>
                        </div>
                    )
                })}
            </section>
        </main>
    )
}
import { redirect } from "next/navigation"

export default function Error(second) {
    return (
        <div onLoad={()=>redirect('http://localhost:3000')}>

        </div>
    )
}
import { Loader } from "lucide-react"

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-40">
            <Loader className="w-8 h-8 animate-spin text-[var(--TextColor)]" />
        </div>
    )
}

export default Loading
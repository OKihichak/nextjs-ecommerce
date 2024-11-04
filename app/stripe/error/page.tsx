import { MonitorSpeakerIcon } from "lucide-react"


export default function ErrorStripe() {
    return(
        <div className=" text-center py-10">
            <MonitorSpeakerIcon className="text-red-600 w-16 h-16 mx-auto my-6"/>
            <h2 className="md:text-2xl text-base text-gray-900 font-semibold">Something went wrong...</h2>
        </div>
    )
}
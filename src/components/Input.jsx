export default function Input({label, textarea, ...props}){
    // const classes = "w-1 p-1 border-b-2 rounded-sm border-stone-300 text-stone-600 bg-stone-200 focus:outline-none focus:border-stone-600";
    return (
        <p className="flex flex-col gap-1 my-4">
            <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
            {textarea ? 
            (<textarea className="w-full p-1 border-b-2 rounded-sm border-stone-300 text-stone-600 bg-stone-200 focus:outline-none focus:border-stone-600" {...props}/>) : 
            (<input className="w-full p-1 border-b-2 rounded-sm border-stone-300 text-stone-600 bg-stone-200 focus:outline-none focus:border-stone-600" {...props}/>) }
        </p>
    )
}
import { Icon } from "@iconify/react";

export default function FilterButton() {

    return (
        <div className="w-full h-full relative">
            <button className={`w-full h-full rounded-lg text-slate-800 dark:text-slate-100 flex items-center gap-2 justify-center border-2 dark:border-neutral-500 border-slate-400 transition-[transform,background] active:scale-95`}>
                <Icon icon={`tabler:filter`} className="w-5 h-5" />
                Filter
            </button>

            {/* <section className="w-full border-2 bg-slate-200 dark:bg-neutral-900 dark:border-neutral-500 border-slate-400 rounded-lg absolute top-10 left-0 divide-y divide-white dark:divide-neutral-700">
                <button className="w-full flex gap-2 py-2 justify-center">
                    <Icon icon={`tabler:filter`} className="w-5 h-5" />
                    Priority descending
                </button>

                <button className="w-full flex gap-2 py-2 justify-center">
                    <Icon icon={`tabler:filter`} className="w-5 h-5" />
                    Priority ascending
                </button>

                <button className="w-full flex gap-2 py-2 justify-center">
                    <Icon icon={`tabler:filter`} className="w-5 h-5" />
                    Status descending
                </button>

                <button className="w-full flex gap-2 py-2 justify-center">
                    <Icon icon={`tabler:filter`} className="w-5 h-5" />
                    Status ascending
                </button>

                <button className="w-full flex gap-2 py-2 justify-center">
                    <Icon icon={`tabler:filter`} className="w-5 h-5" />
                    A to Z
                </button>

                <button className="w-full flex gap-2 py-2 justify-center">
                    <Icon icon={`tabler:filter`} className="w-5 h-5" />
                    Z to A
                </button>
            </section> */}
        </div>
    )
}
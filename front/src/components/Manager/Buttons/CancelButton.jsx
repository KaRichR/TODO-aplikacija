import { Icon } from "@iconify/react";

export default function CancelButton({ action }) {

    return (
        <button className={`w-full h-full rounded-lg text-slate-800 dark:text-slate-100 flex items-center gap-2 justify-center border-2 dark:border-neutral-500 border-slate-400 transition-[transform,background] active:scale-95`} onClick={action}>
            <Icon icon={`tabler:x`} className="w-5 h-5" />
            Cancel
        </button>
    )
}
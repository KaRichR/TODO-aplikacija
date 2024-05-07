import { Icon } from '@iconify/react'



export default function MenuListCard(){
    const item = {
        icon: "tabler:calendar-exclamation",
        color: "red",
        title: "Upcoming",
        items: 7
    }

    return (
        <div class="container h-12 flex items-center">
          <Icon icon={item.icon} className="w-6 h-6 mr-4" />
          <h1 className="text-lg">{item.title}</h1>
          <div className='w-10 h-6 bg-slate-200 flex rounded-lg justify-center ml-auto mr-12'>{item.items}</div>
        </div>
      );
}


import { Icon } from '@iconify/react';

function MenuListItem({ icon, title, items }) {
  return (
    <div className="container h-12 flex items-center">
      <Icon icon={icon} className="w-6 h-6 mr-4" />
      <h1 className="text-lg">{title}</h1>
      {items !== undefined && (
        <div className="w-10 h-6 bg-slate-200 flex rounded-lg justify-center ml-auto mr-3">
          {items}
        </div>
      )}
    </div>
  );
}

export default function MenuListCard() {
  const firstItem = {
    icon: "tabler:calendar-exclamation",
    title: "Upcoming",
    items: 2
  };

  const secondItem = {
    icon: "tabler:list-check",
    title: "Today",
    items: 2
  };

  const createTask = {
    icon: "tabler:plus",
    title: "Create Task",
  };

  const signOut = {
    icon: "tabler:logout",
    title: "Sign Out"
  };

  return (
    <div className="relative h-full">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">Menu</h1>
            <button className="focus:outline-none">
              <Icon icon="tabler:menu-2" className="w-8 h-8" />
            </button>
          </div>

          <MenuListItem icon={firstItem.icon} title={firstItem.title} items={firstItem.items} />

          <MenuListItem icon={secondItem.icon} title={secondItem.title} items={secondItem.items} />

          <div className="mx-auto mt-4 w-90p h-1 bg-slate-300 rounded-full"></div>

          <div className="mt-4">
            <MenuListItem icon={createTask.icon} title={createTask.title} />
          </div>
        </div>

        <div className="absolute bottom-0">
          <MenuListItem icon={signOut.icon} title={signOut.title} />
        </div>
      </div>
    </div>
  );
}

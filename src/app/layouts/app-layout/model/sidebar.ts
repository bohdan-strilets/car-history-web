import { useSidebarStore } from './sidebar.store';

export const useSidebar = () => {
  const expanded = useSidebarStore((state) => state.expanded);
  const toggle = useSidebarStore((state) => state.toggle);
  const setExpanded = useSidebarStore((state) => state.setExpanded);

  return { expanded, toggle, setExpanded };
};

export interface SidebarStore {
  expanded: boolean;
  toggle: () => void;
  setExpanded: (expanded: boolean) => void;
}

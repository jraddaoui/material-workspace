export class NavigationItem {
  label: string;
  route: string;
  icon?: string;
}

export class NavigationParent {
  label: string;
  children: NavigationItem[];
  icon?: string;
}

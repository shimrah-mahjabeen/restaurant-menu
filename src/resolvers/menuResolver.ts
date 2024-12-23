import { menuData } from "../data/menuData";
import { MenuCategory, MenuItem } from "../types/menuTypes";

export const menuResolver = {
  menuItems: ({ category }: { category?: keyof MenuCategory }): MenuItem[] => {
    if (category) {
      const matchedCategory = menuData.menu[category];

      if (!matchedCategory) {
        return [];
      }

      if (Array.isArray(matchedCategory)) {
        return matchedCategory;
      }

      return Object.values(matchedCategory).flat();
    }

    return Object.values(menuData.menu).flatMap((value) =>
      Array.isArray(value) ? value : Object.values(value).flat()
    );
  },
  fullMenu: (): MenuCategory => {
    return menuData.menu;
  },
};

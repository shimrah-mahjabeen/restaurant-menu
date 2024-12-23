export interface MenuItem {
  name: string;
  description?: string;
  price?: number;
  half_price?: number;
  full_price?: number;
}

export interface MenuCategory {
  appetizers: MenuItem[];
  entrees: MenuItem[];
  sandwiches: {
    cold: MenuItem[];
    hot: MenuItem[];
  };
  soups_and_salads: MenuItem[];
  fajitas: MenuItem[];
  tacos: MenuItem[];
  enchiladas: MenuItem[];
}

export interface MenuData {
  menu: MenuCategory;
}

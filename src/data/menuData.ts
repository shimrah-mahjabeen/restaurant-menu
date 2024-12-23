import { MenuData } from "../types/menuTypes";

export const menuData: MenuData = {
  menu: {
    appetizers: [
      {
        name: "Iceberg Wedge Salad with House Cured Bacon",
        description: "tomato salsa gorgonzola",
        price: 7.5,
      },
      {
        name: "Sautéed Shredded Brussels Sprouts",
        description: "bacon hazelnuts gorgonzola",
        price: 6.95,
      },
      {
        name: "Kale Salad",
        description: "parmesan crisp corn radish garlic-lemon vinaigrette",
        price: 7.5,
      },
      {
        name: "Pecan Crusted Utah Goat Cheese with Basil-Mint Pesto",
        description: "grilled tomato salsa crostini",
        price: 6.95,
      },
      {
        name: "Chicken and Cabbage Eggrolls",
        description: "hot & sour dipping sauce",
        price: 6.95,
      },
    ],
    entrees: [
      {
        name: "Farfalle Pasta with Braised Pork in Tomato Cream",
        description: "capers butternut squash kale",
        price: 12.95,
      },
      {
        name: "Stout Braised Bratwurst",
        description:
          "horseradish mashed potatoes roasted root veggies grilled onion",
        price: 13.95,
      },
      {
        name: "Salmon & Crispy Tofu in Yellow Curry Sauce",
        description: "vegetable sauté golden raisin chutney",
        price: 15.95,
      },
      {
        name: "Sesame Shrimp",
        description:
          "udon noodles ramen broth shiitake mushrooms bean sprouts scallions",
        price: 13.95,
      },
    ],
    sandwiches: {
      cold: [
        {
          name: "Turkey & Avocado",
          description: "with tomato",
          half_price: 7.95,
          full_price: 9.25,
        },
        {
          name: "Pub Club",
          description: "turkey, bacon, lettuce, tomato",
          half_price: 7.95,
          full_price: 9.25,
        },
      ],
      hot: [
        {
          name: "Southwest Chicken Breast",
          description:
            "Grilled Onion, Poblano Pepper, Tomato, Lettuce, Jack Cheese",
          price: 9.5,
        },
        {
          name: "Portobello Fresh Mozzarella",
          description:
            "Caramelized Onion, Roasted Pepper, Tomato, Field Greens, Basil Aioli",
          price: 9.5,
        },
      ],
    },
    soups_and_salads: [
      {
        name: "French Onion or Soup of the Day",
        price: 4.95,
      },
    ],
    fajitas: [
      {
        name: "Chicken Fajitas",
        description: "Onions, Poblano and Bell Peppers, Guacamole, Two Salsas",
        price: 10.95,
      },
    ],
    tacos: [
      {
        name: "Beer Battered Fish",
        description: "with Jalapeño Remoulade, Roasted Salsa, Cabbage",
        price: 9.95,
      },
    ],
    enchiladas: [
      {
        name: "Chili Relleno",
        description:
          "Stuffed with Jack Cheese & Corn Glazed Yam, Chayote Squash Succotash, Red Chili Sauce",
        price: 9.95,
      },
    ],
  },
};

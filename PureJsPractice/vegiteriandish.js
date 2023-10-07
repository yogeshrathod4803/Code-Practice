const dishes = [
  { name: "Spaghetti Carbonara", type: "Non-vegetarian" },
  { name: "Margherita Pizza", type: "Vegetarian" },
  { name: "Chicken Tikka Masala", type: "Non-vegetarian" },
  { name: "Caesar Salad", type: "Vegetarian" },
  { name: "Beef Stroganoff", type: "Non-vegetarian" },
  { name: "Vegetable Stir-Fry", type: "Vegetarian" },
  { name: "Sushi Rolls", type: "Non-vegetarian" },
  { name: "Veggie Burger", type: "Vegetarian" },
  { name: "Lamb Biryani", type: "Non-vegetarian" },
  { name: "Caprese Salad", type: "Vegetarian" },
];

const menu = () => {
  return dishes.filter((item) => {
    if (item.type === "Vegetarian") {
      return item;
    }
  });
};

console.log(menu());

import lasagnaImg from './assets/images/classic_lasagna_1782546949816.jpg';
import pizzaImg from './assets/images/neapolitan_pizza_1782546963975.jpg';
import carbonaraImg from './assets/images/creamy_carbonara_1782546979085.jpg';

export interface Recipe {
  id: string;
  title: string;
  image: string;
  description: string;
  prepTime: string;
  cookTime: string;
  servings: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  ingredients: string[];
  steps: string[];
}

export const recipes: Recipe[] = [
  {
    id: 'lasagna',
    title: 'Classic Lasagna',
    image: lasagnaImg,
    description: 'A comforting, warm, and rich Italian classic. This recipe layers tender pasta sheets, savory sweet Italian sausage and lean beef Bolognese sauce, creamy ricotta herb filling, and mountains of melted bubbling golden-brown mozzarella cheese. It is the ultimate crowd-pleaser and family Sunday dinner favorite.',
    prepTime: '30 mins',
    cookTime: '50 mins',
    servings: '8 servings',
    difficulty: 'Medium',
    ingredients: [
      '12 lasagna noodles (cooked according to package)',
      '1 lb sweet Italian sausage',
      '3/4 lb lean ground beef',
      '1/2 cup finely chopped onion',
      '2 cloves garlic, minced',
      '1 can (28 oz) crushed tomatoes',
      '2 cans (6 oz each) tomato paste',
      '2 cans (6.5 oz each) canned tomato sauce',
      '1/2 cup water',
      '2 tbsp white sugar',
      '1 1/2 tsp dried basil leaves',
      '1/2 tsp fennel seeds',
      '1 tsp Italian seasoning',
      '1 1/2 tsp salt (divided)',
      '1/4 tsp ground black pepper',
      '4 tbsp chopped fresh parsley (divided)',
      '16 oz ricotta cheese',
      '1 egg',
      '3/4 lb mozzarella cheese, sliced or shredded',
      '3/4 cup grated Parmesan cheese'
    ],
    steps: [
      'In a large Dutch oven or pot, cook sausage, ground beef, onion, and garlic over medium heat until well browned. Stir in crushed tomatoes, tomato paste, tomato sauce, and water. Season with sugar, basil, fennel seeds, Italian seasoning, 1 tsp salt, pepper, and 2 tbsp parsley. Simmer, covered, for about 1 1/2 hours, stirring occasionally.',
      'Bring a large pot of lightly salted water to a boil. Cook lasagna noodles in boiling water for 8 to 10 minutes. Drain noodles, and rinse with cold water to prevent sticking.',
      'In a medium mixing bowl, combine ricotta cheese with the egg, remaining 2 tbsp parsley, and 1/2 tsp salt.',
      'Preheat oven to 375°F (190°C).',
      'To assemble: Spread 1 1/2 cups of meat sauce in the bottom of a 9x13-inch baking dish. Arrange 6 noodles lengthwise over the meat sauce. Spread one-half of the ricotta cheese mixture over noodles. Top with a third of the mozzarella cheese slices.',
      'Spoon 1 1/2 cups meat sauce over mozzarella, and sprinkle with 1/4 cup Parmesan cheese. Repeat layers: remaining 6 noodles, remaining ricotta mixture, another third of mozzarella, meat sauce, and Parmesan.',
      'Top with the remaining mozzarella and Parmesan cheese. Cover loosely with aluminum foil (be careful not to let the foil touch the cheese to prevent sticking).',
      'Bake in preheated oven for 25 minutes. Remove foil, and bake an additional 25 minutes until the cheese is bubbling and golden-brown. Let rest for 15 minutes before serving to let layers set.'
    ]
  },
  {
    id: 'pizza',
    title: 'Neapolitan Pizza',
    image: pizzaImg,
    description: 'The absolute gold standard of Italian pizzas. A light, airy, and blistered wood-fired crust topped with vibrant, simple San Marzano tomato sauce, fresh pools of creamy buffalo mozzarella, green fragrant basil leaves, and a fine drizzle of extra virgin olive oil. True culinary art in its simplest form.',
    prepTime: '20 mins (+ 24h rise)',
    cookTime: '10 mins',
    servings: '4 pizzas',
    difficulty: 'Hard',
    ingredients: [
      '500g Tipo "00" flour (or bread flour)',
      '325ml room temperature water',
      '10g fine sea salt',
      '3g active dry yeast',
      '1 can (14 oz) whole peeled San Marzano tomatoes',
      '12 oz fresh buffalo mozzarella or fior di latte, sliced and drained',
      'A large bunch of fresh sweet basil leaves',
      '2 tbsp extra virgin olive oil',
      'Semolina flour for dusting'
    ],
    steps: [
      'In a large bowl, dissolve yeast and salt in the water. Gradually add the Tipo 00 flour, mixing with your hands or a wooden spoon until a shaggy dough forms.',
      'Turn dough onto a lightly floured surface and knead vigorously for 10-15 minutes until smooth, elastic, and slightly sticky. Cover with a damp cloth and let rise at room temperature for 2 hours.',
      'Divide the dough into 4 equal portions (around 200g-210g each). Shape into tight, smooth balls. Place them on a tray, cover tightly, and cold-ferment in the refrigerator for 24 to 48 hours for maximum flavor development.',
      'Take the dough balls out of the fridge 2 hours before baking to bring them to room temperature.',
      'Place a pizza stone or steel on the top rack of your oven. Preheat your oven to its absolute maximum temperature (typically 500°F/260°C or 550°F/290°C) for at least 45-60 minutes.',
      'Prepare the sauce: Place whole San Marzano tomatoes in a bowl. Crush them by hand or with a fork to maintain a rustic texture. Add a pinch of sea salt (do not cook the sauce).',
      'On a semolina-dusted surface, gently press one dough ball from the center outwards with your fingers, leaving a 1/2-inch border untouched to form the crust (cornicione). Stretch carefully by draping it over your knuckles until it is 10-12 inches wide.',
      'Transfer stretched dough to a dusted pizza peel. Spread 4-5 tablespoons of tomato sauce over the base. Scatter 3 oz of fresh mozzarella slices and 4-5 fresh basil leaves. Drizzle with 1/2 tbsp of olive oil.',
      'Slide the pizza onto the preheated stone. Bake for 5 to 7 minutes (depending on oven heat) until the crust is puffed and blistered, and cheese is completely melted and bubbling. Serve immediately.'
    ]
  },
  {
    id: 'carbonara',
    title: 'Creamy Carbonara',
    image: carbonaraImg,
    description: 'An authentic Roman masterpiece that requires no cream whatsoever. This luscious recipe relies on the emulsion of high-quality fresh egg yolks, sharp Pecorino Romano cheese, starchy pasta water, and crispy savory guanciale (or pancetta) to create a velvety, rich, and peppery sauce that coats every strand of pasta.',
    prepTime: '15 mins',
    cookTime: '15 mins',
    servings: '4 servings',
    difficulty: 'Medium',
    ingredients: [
      '400g (14 oz) high-quality Spaghetti or Rigatoni',
      '150g (5 oz) Guanciale (cured pork jowl) or Pancetta, cut into thick cubes',
      '4 large fresh egg yolks + 1 whole egg',
      '75g (1 cup) freshly grated Pecorino Romano cheese (plus extra for serving)',
      '1 tbsp whole black peppercorns, crushed in a mortar or coarsely ground',
      '1 tsp kosher salt (for pasta water)'
    ],
    steps: [
      'Bring a large pot of water to a boil. Add salt (use less salt than usual, as guanciale and Pecorino are very salty). Cook spaghetti according to package instructions until 1 minute before al dente.',
      'Meanwhile, heat a large skillet or pan over medium-low heat. Add cubed guanciale and cook slowly, stirring occasionally, until the fat has rendered and the pork is beautifully crispy and golden on the outside (about 8-10 minutes). Remove the skillet from heat, but keep the guanciale and its rendered fat in the pan.',
      'In a medium heat-safe bowl, whisk together the 4 egg yolks, 1 whole egg, and the grated Pecorino Romano cheese until a thick, smooth paste forms. Whisk in most of the coarsely ground black pepper.',
      'Just before draining the pasta, ladle out 1 cup of the starchy, cloudy pasta cooking water and set it aside.',
      'Drain the pasta and add it directly to the skillet with the warm guanciale and rendered fat. Toss well for 30 seconds to coat the noodles in the pork fat, letting it cool down slightly (so the eggs do not scramble when added).',
      'Pour the egg and cheese mixture over the pasta. Immediately begin tossing and stirring vigorously. Slowly splash in 1/4 to 1/2 cup of the hot reserved pasta water.',
      'Continue tossing off the heat for 1-2 minutes. The combination of cheese, egg yolks, rendered fat, and starch water will emulsify into a creamy, smooth, glossy sauce. If it is too thick, add a splash more pasta water; do not heat the pan, or the eggs will curdle.',
      'Divide among warm bowls, top with extra crispy guanciale pieces from the pan, extra grated Pecorino Romano, and a final sprinkle of coarse black pepper. Enjoy immediately!'
    ]
  }
];

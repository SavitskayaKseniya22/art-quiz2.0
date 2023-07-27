export const routes: {
  [x: string]: {
    title: string;
    description: string;
  };
} = {
  "404": {
    title: "404",
    description: "Page not found",
  },
  "/": {
    title: "Art Quiz",
    description: "This is the home page for Art Quiz",
  },
  artists: {
    title: "Category 'Artists'",
    description: "This is the page for choosing a level in the category 'Artists'",
  },
  paintings: {
    title: "Category 'Paintings'",
    description: "This is the page for choosing a level in the category 'Paintings'",
  },
  "paintings-quiz": {
    title: "Paintings Quiz ",
    description: "This is the page for quiz in the category 'Paintings'",
  },
  "artists-quiz": {
    title: "Artists Quiz",
    description: "This is the page for quiz in the category 'Paintings'",
  },
  "artists-quiz-result": {
    title: "Artists Quiz last result",
    description: "This is the page for the last result in the category 'Paintings'",
  },
  "paintings-quiz-result": {
    title: "Paintings Quiz last result",
    description: "This is the page for the last result in the category 'Paintings'",
  },
};

export const locationHandler = async (location: string) => {
  const route =
    (/^paintings\/[0-9]+$/.test(location) && routes["paintings-quiz"]) ||
    (/^artists\/[0-9]+$/.test(location) && routes["artists-quiz"]) ||
    (/^paintings\/[0-9]+\/last-result$/.test(location) && routes["paintings-quiz-result"]) ||
    (/^artists\/[0-9]+\/last-result$/.test(location) && routes["artists-quiz-result"]) ||
    (location.length === 0 && routes["/"]) ||
    routes[location] ||
    routes["404"];

  document.title = route.title;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) {
    meta.setAttribute("content", route.description);
  }
};

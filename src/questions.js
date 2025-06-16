const questions = [
  // --- Easy Questions ---
  {
    id: 1,
    question: "What is JSX?",
    answer:
      "JSX stands for JavaScript XML. It allows us to write HTML-like syntax in our JavaScript code.",
    category: "Easy",
  },
  {
    id: 2,
    question: "What is a component in React?",
    answer:
      "A component is an independent, reusable piece of UI. It can be a class or a function.",
    category: "Easy",
  },
  {
    id: 3,
    question: "What is the purpose of `props`?",
    answer:
      "`props` (short for properties) are used to pass data from a parent component to a child component.",
    category: "Easy",
  },
  {
    id: 4,
    question: "How do you create a React application?",
    answer:
      "You can create a new React application using `npx create-react-app my-app`.",
    category: "Easy",
  },

  // --- Medium Questions ---
  {
    id: 5,
    question: "What is state in a React component?",
    answer:
      "State is a built-in object used to contain data or information about the component that can change over time.",
    category: "Medium",
  },
  {
    id: 6,
    question: "What does the `useState` hook do?",
    answer:
      "`useState` is a Hook that allows you to have state variables in functional components.",
    category: "Medium",
  },
  {
    id: 7,
    question: "What is the `useEffect` hook used for?",
    answer:
      "The `useEffect` hook is used for side effects in functional components, such as data fetching or subscriptions.",
    category: "Medium",
  },
  {
    id: 8,
    question: "What is conditional rendering?",
    answer:
      "Conditional rendering allows you to render different components or elements based on certain conditions.",
    category: "Medium",
  },

  // --- Hard Questions ---
  {
    id: 9,
    question: "What is the difference between state and props?",
    answer:
      "`props` are passed from a parent and are immutable, while `state` is managed within the component and can be changed.",
    category: "Hard",
  },
  {
    id: 10,
    question: "What is a key in React lists?",
    answer:
      "A `key` is a special string attribute you need to include when creating lists of elements to help React identify which items have changed.",
    category: "Hard",
  },
  {
    id: 11,
    question: "What is the purpose of the React Context API?",
    answer:
      "The Context API provides a way to pass data through the component tree without having to pass props down manually at every level.",
    category: "Hard",
  },
  {
    id: 12,
    question: "What does lifting state up mean?",
    answer:
      "It means moving state to the closest common ancestor of the components that need it, to share state between them.",
    category: "Hard",
  },
];

export default questions;
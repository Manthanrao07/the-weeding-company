export type Option = {
  id: string;
  text: string;
};

export type Question = {
  id: number;
  text: string;
  options: Option[];
};

export const questions: Question[] = [
  {
    id: 1,
    text: "What sound does a cat make?",
    options: [
      { id: "a", text: "Bhau-Bhau" },
      { id: "b", text: "Meow-Meow" },
      { id: "c", text: "Oink-Oink" }
    ]
  },
  {
    id: 2,
    text: "What would you probably find in your fridge?",
    options: [
      { id: "a", text: "Shoes" },
      { id: "b", text: "Ice Cream" },
      { id: "c", text: "Books" }
    ]
  },
  {
    id: 3,
    text: "What color are bananas?",
    options: [
      { id: "a", text: "Blue" },
      { id: "b", text: "Yellow" },
      { id: "c", text: "Red" }
    ]
  }
];

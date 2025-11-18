export type Member = {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  category: Category;
};

export type Category =
  | "All"
  | "WebDEV"
  | "Finance"
  | "Logistics"
  | "Dance"
  | "Decoration and art"
  | "Videography"
  | "food"
  | "General Management"
  | "Design";

export const categories: Category[] = [
  "All",
  "WebDEV",
  "Finance",
  "Logistics",
  "Dance",
  "Decoration and art",
  "Videography",
  "food",
  "General Management",
  "Design",
];

export const members: Member[] = [
  {
    id: 1,
    name: "Steve Ambuul",
    role: "Lead Developer",
    imageUrl: "/teams/images/Sekhar.jpg",
    category: "WebDEV",
  },
  {
    id: 2,
    name: "Mel Phelps Cevik",
    role: "Finance Head",
    imageUrl: "/teams/images/Sekhar.jpg",
    category: "Finance",
  },
  {
    id: 3,
    name: "Alden Dale",
    role: "Logistics Coordinator",
    imageUrl: "/teams/images/Sekhar.jpg",
    category: "Logistics",
  },
  {
    id: 4,
    name: "Kaley Deneen",
    role: "Choreographer",
    imageUrl: "/teams/images/Sekhar.jpg",
    category: "Dance",
  },
  {
    id: 5,
    name: "Tony Eades",
    role: "Art Director",
    imageUrl: "/teams/images/Sekhar.jpg",
    category: "Decoration and art",
  },
  {
    id: 6,
    name: "Megan Erickson",
    role: "Lead Videographer",
    imageUrl: "/teams/images/Sekhar.jpg",
    category: "Videography",
  },
  {
    id: 7,
    name: "Ursula Feller",
    role: "Catering Manager",
    imageUrl: "/teams/images/Sekhar.jpg",
    category: "food",
  },
  {
    id: 8,
    name: "Brandon Jones",
    role: "General Manager",
    imageUrl: "/teams/images/Sekhar.jpg",
    category: "General Management",
  },
  {
    id: 9,
    name: "Alaire Jones",
    role: "Lead Designer",
    imageUrl: "/teams/images/Sekhar.jpg",
    category: "Design",
  },
  {
    id: 10,
    name: "Andrew Levy",
    role: "Web Developer",
    imageUrl: "/teams/images/Sekhar.jpg",
    category: "WebDEV",
  },
  {
    id: 11,
    name: "Jane Doe",
    role: "Accountant",
    imageUrl: "/teams/images/Sekhar.jpg",
    category: "Finance",
  },
];

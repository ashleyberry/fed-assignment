import classroom from "./../assets/classroom.png";
import internship from "./../assets/internship.png";
import connect from "./../assets/connect.png";
import fearless from "./../assets/fearless.png";

export type HeaderMenuItemType = {
  name: string;
  subMenuItemList?: string[];
};

export type OurProgramsItemType = {
  imageUrl: string;
  name: string;
  description: string;
};

export const ourProgramsItems: OurProgramsItemType[] = [
  {
    imageUrl: classroom,
    name: "Classroom",
    description:
      "Eh discovered his career interests through our classroom experiences.",
  },
  {
    imageUrl: internship,
    name: "Internship",
    description:
      "Ingrid worked with a local agency through our partner internship program.",
  },
  {
    imageUrl: connect,
    name: "Connect",
    description:
      "Travon made valuable professional connections through our connect program.",
  },
  {
    imageUrl: fearless,
    name: "Fearless",
    description: "Get involved and learn more at our Fearless Conversations.",
  },
];

export const mainMenuItems: HeaderMenuItemType[] = [
  {
    name: "About",
  },
  {
    name: "News",
  },
  {
    name: "Contact",
  },
];

export const secondaryMenuItems: HeaderMenuItemType[] = [
  {
    name: "Impact",
    subMenuItemList: [
      "Annual Report",
      "BrandLab Stories",
      "State of the Industry",
    ],
  },
  { name: "Programs", subMenuItemList: ["Item 1", "Item 2", "Item 3"] },
  {
    name: "Join the Movement",
    subMenuItemList: ["Item 1", "Item 2", "Item 3"],
  },
  { name: "Job Board", subMenuItemList: ["Item 1", "Item 2", "Item 3"] },
];

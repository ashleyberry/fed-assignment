import React from "react";
import { Link, Typography } from "@mui/material";
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
  description: React.ReactElement;
};

const handleDescriptionConversion = ({
  description,
  linkText,
}: {
  description: string;
  linkText: string;
}) => {
  return (
    <Typography marginTop={1} textAlign={"center"}>
      {description} <Link>{linkText}</Link>.
    </Typography>
  );
};

export const ourProgramsItems: OurProgramsItemType[] = [
  {
    imageUrl: classroom,
    name: "Classroom",
    description: handleDescriptionConversion({
      description: "Eh discovered his career interests through our",
      linkText: "classroom experiences",
    }),
  },
  {
    imageUrl: internship,
    name: "Internship",
    description: handleDescriptionConversion({
      description: "Ingrid worked with a local agency through our partner",
      linkText: "internship program",
    }),
  },
  {
    imageUrl: connect,
    name: "Connect",
    description: handleDescriptionConversion({
      description: "Travon made valuable professional connections through our ",
      linkText: "connect program",
    }),
  },
  {
    imageUrl: fearless,
    name: "Fearless",
    description: handleDescriptionConversion({
      description: "Get involved and learn more at our",
      linkText: "Fearless Conversations",
    }),
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

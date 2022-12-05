import Image from "next/image";
import React, { Fragment } from "react";
import { BiChevronDown } from "react-icons/bi";
import { Box, Icon } from "@chakra-ui/react";

import imageLogo from "assets/images/logo.png";

import {
  HeaderContainer,
  HeaderRightSideContainer,
  HeaderRightSideItem,
} from "./header.styles";
import NormalText from "components/NormalText";

const navLink = [
  {
    text: "Blog",
  },
  {
    text: "Socials",
  },
  {
    text: "Past Socials",
  },
  {
    text: "Clubs",
    rightIcon: <Icon as={BiChevronDown} fontSize="24px" mt="3px" />,
  },
  {
    text: "Contact",
  },
];

const Header = () => {
  return (
    <HeaderContainer>
      <Image src={imageLogo} alt="Ball Image" objectFit="cover" />
      <HeaderRightSideContainer>
        {navLink?.map((record, index) => (
          <Fragment key={`nav-link-item-${index}`}>
            <HeaderRightSideItem>
              <NormalText bold text={record?.text} color="text.grey.100" />
              {record?.rightIcon && (
                <Box marginLeft="5px">{record?.rightIcon}</Box>
              )}
            </HeaderRightSideItem>
          </Fragment>
        ))}
      </HeaderRightSideContainer>
    </HeaderContainer>
  );
};

export default Header;

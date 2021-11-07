import React from "react";
import { Link } from "gatsby";
import { WrapItem, VStack, Heading, Text } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Tag } from "@chakra-ui/tag";

import "../theme.scss";

const PostCard = ({ post }) => {
  return (
    <WrapItem
        minH='150px'
      width={{ base: "100%", xl: "25.6rem", lg: "49%", md: "48%", sm: "100%" }}
      padding="7"
      borderRadius="10"
      border="2px solid"
      borderColor={useColorModeValue("black", "white")}
      _hover={useColorModeValue('gray.700','gray.200')}
    ><Link to={post.frontmatter.slug}>
        <VStack spacing='3' align="start">
          <Heading color={useColorModeValue("black", "white")}>
            {post.frontmatter.title}
          </Heading>
          <Text color={useColorModeValue("black", "white")}>
            {post.frontmatter.date}
          </Text>
          <Tag position='bottom' px="10" colorScheme={post.frontmatter.color}>
          {post.frontmatter.category}
        </Tag>
        </VStack>
        </Link>
    </WrapItem>
  );
};

export default PostCard;

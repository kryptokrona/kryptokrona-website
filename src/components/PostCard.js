import React from "react";
import { Link } from "gatsby";
import { WrapItem, VStack, Heading, Text } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Tag } from "@chakra-ui/tag";

import "../theme.scss";

const PostCard = ({ post }) => {
  return (
    <Link to={post.frontmatter.slug}>
    <WrapItem
      width={{ base: "100%", xl: "25.6rem", lg: "49%", md: "49%", sm: "100%" }}
      padding="8"
      borderRadius="10"
      border="2px solid"
      borderColor={useColorModeValue("black", "white")}
      _hover={useColorModeValue('gray.700','gray.200')}
    >
        <VStack align="start" spacing="3">
          <Heading color={useColorModeValue("black", "white")}>
            {post.frontmatter.title}
          </Heading>
          <Text color={useColorModeValue("black", "white")}>
            {post.frontmatter.date}
          </Text>
        </VStack>
        <Tag px="5" mt="5" colorScheme={post.frontmatter.color}>
          {post.frontmatter.category}
        </Tag>
    </WrapItem>
    </Link>
  );
};

export default PostCard;

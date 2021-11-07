import React from "react"
import { Link } from "gatsby";
import { WrapItem, VStack, Heading, Text } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Tag } from "@chakra-ui/tag";

import '../theme.scss'

const PostCard = ({ post }) => {



    return (
<WrapItem padding='8' borderRadius='10' border='2px solid' borderColor={useColorModeValue('black', 'white')}>
        <Link to={post.frontmatter.slug}>
            <VStack align='start' spacing='3'>
            <Heading color={useColorModeValue('black', 'white')}>{post.frontmatter.title}</Heading>
            <Text color={useColorModeValue('black', 'white')}>{post.frontmatter.date}</Text>
            </VStack>
            <Tag px='5' mt='5' colorScheme={post.frontmatter.color}>{post.frontmatter.category}</Tag>
        </Link>
</WrapItem>
    )
}

export default PostCard

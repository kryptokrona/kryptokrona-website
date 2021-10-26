import React from "react"
import { Card, Col } from "react-bootstrap";
import { Link } from "gatsby";

const PostLink = ({ post }) => (

<Col>
    <Card>
        <div className='card-body'>
        <Link to={post.frontmatter.slug}>
            {post.frontmatter.title} ({post.frontmatter.date})
        </Link>
        </div>
    </Card>
</Col>
)
export default PostLink

import React from 'react'
import { getPostIds , getPostById} from '../../lib/post'

export default function Post({post}) {
    return (
        <div>
            {post.title}
        </div>
    )
}

export const getStaticPaths = async () => {
    const paths = await getPostIds()
    console.log(paths)

    return {
        paths,
        fallback: false
    }
}
export const getStaticProps = async ({params}) => {
    const post = await getPostById(params.id)

    return {
        props: {
            post
        }
    }
}
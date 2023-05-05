import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// Internal
import { IPost } from '../types/post'
import Post from './post'

interface PostsInterface {
    posts: IPost[],
}

const PostList = ({ posts } : PostsInterface) => {
    const postEl = posts.map(post => (
        <Grid item xs={4}>
            <Post title={post.title} body={post.body} />
        </Grid>
    ));
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {postEl}
            </Grid>
        </Box>

    )
}


export default PostList;
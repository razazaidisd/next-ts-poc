interface Post { 
    userId?: number,
    id?: number,
    title: string,
    body: string,
}

const Post = (postData: Post) => (
    <div>
        <h2>{postData.title}</h2>
        <p>{postData.body}</p>
    </div>
)

export default Post;
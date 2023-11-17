import Post from "./Post"


export default function Posts() {
    const posts = [
        {
            id: '1',
            username: 'codewithSahan',
            userImg: 'https://th.bing.com/th/id/OIP.qNBaBUh5A4nnZgbCWEHLdQAAAA?w=120&h=180&c=7&r=0&o=5&pid=1.7',
            img: "https://images.unsplash.com/photo-1683009427479-c7e36bbb7bca?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
            caption: 'Nice Picture'
        },
        {
            id: '2',
            username: 'codewithCJ',
            userImg: 'https://media.istockphoto.com/id/1406197730/photo/portrait-of-a-young-handsome-indian-man.webp?b=1&s=170667a&w=0&k=20&c=KtmKHyOE6MJV0w2DiGX8P4399KHNbZ3p8lCjTEabGcY=',
            img: "https://images.unsplash.com/photo-1682687221080-5cb261c645cb?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
            caption: 'Nice Image'
        }
    ]
    return (
    <div>
        {posts.map(post=>(
            <Post
            key={post.id}
            id={post.id}
            username={post.username}
            userImg={post.userImg}
            img={post.img}
            caption={post.caption}
            />
        ))}

    </div>
  )
}

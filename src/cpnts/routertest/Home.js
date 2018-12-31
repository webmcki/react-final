import React, {Component} from 'react'
import axios from 'axios'

export default class Home extends Component {
  state = {
    posts: []
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      // console.log(res)
      this.setState({
        posts: res.data.slice(0, 3)
      })
    })
  }
  render() {
    const {posts} = this.state
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div key={post.id}>
            <div>{post.title}</div>
            <p>{post.body}</p>
            <p>-------------------------------------------</p>
          </div>
        )
      })
    ) : (
      <div>게시물이 없음</div>
    )
    return <div>{postList}</div>
  }
}

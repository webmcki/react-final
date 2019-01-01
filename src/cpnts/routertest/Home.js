import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Home extends Component {
  state = {
    posts: []
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      // console.log(res)
      this.setState({
        posts: res.data.slice(0, 10)
      })
    })
  }
  render() {
    const {posts} = this.state
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div key={post.id}>
            <div>
              <Link to={'./' + post.id}>
                <span>{post.title}</span>
              </Link>
            </div>
            <p>{post.body}</p>
            <p>-------------------------------------------------------------</p>
          </div>
        )
      })
    ) : (
      <div>게시물이 없음</div>
    )
    return <div>{postList}</div>
  }
}

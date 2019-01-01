import React, {Component, Fragment} from 'react'
import axios from 'axios'

class Post extends Component {
  state = {
    post: null
  }

  componentDidMount() {
    let id = this.props.match.params.post_id
    axios
      .get('https://jsonplaceholder.typicode.com/posts/' + id)
      .then((res) => {
        this.setState({
          post: res.data
        })
      })
  }

  render() {
    const post = this.state.post ? (
      <div>
        <h4>{this.state.post.title}</h4>
        <p>{this.state.post.body}</p>
      </div>
    ) : (
      <div>
        <h4>.</h4>
      </div>
    )

    return (
      <Fragment>
        <h1>Post: {post}</h1>
      </Fragment>
    )
  }
}

export default Post

import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'

class Post extends Component {
  render() {
    const post = this.props.post ? (
      <div>
        <h4>{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
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

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id
  return {
    post: state.posts.find((post) => {
      return post.id === id
    })
  }
}

export default connect(mapStateToProps)(Post)

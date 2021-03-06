import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import AccountBox from '../pokeball.svg'
import {connect} from 'react-redux'

class Home extends Component {
  render() {
    console.log(this.props)
    const {posts} = this.props
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div key={post.id}>
            <div>
              <Link to={'/' + post.id}>
                <img src={AccountBox} alt="이미지" />
                <span>{post.title}</span>
              </Link>
            </div>
            <p>{post.body}</p>
            <p>-------------------------------------------------------------</p>
          </div>
        )
      })
    ) : (
      <div>.</div>
    )
    return <div>{postList}</div>
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home)

import React, {Component, Fragment} from 'react'

class Post extends Component {
  state = {
    id: null
  }

  componentDidMount() {
    let id = this.props.match.params.post_id
    this.setState({
      id: id
    })
  }

  render() {
    return (
      <Fragment>
        <h1>Post: {this.state.id}</h1>
      </Fragment>
    )
  }
}

export default Post

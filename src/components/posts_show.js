import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deletePost, fetchPost } from '../actions';

class PostsShow extends Component {
  constructor() {
    super();

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    if (!this.props.post) {
      const { id } = this.props.match.params;

      this.props.fetchPost(id);
    }
  }

  handleDelete() {
    const { id } = this.props.match.params;

    this.props.deletePost(id, () => {
      this.props.history.push('/');
    })
  }

  render() {
    const { post } = this.props;

    if (!post) return (
      <div>
        Loading...
      </div>
    );

    return (
      <div>
        <Link to='/'>Back to Posts</Link>
        <button className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
        <h3>{ post.title }</h3>
        <h6>Categories: { post.categories }</h6>
        <p>{ post.content }</p>
      </div>
    )
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { deletePost, fetchPost })(PostsShow);

import React from 'react'
import { Link } from 'react-router-dom'
import Post from '../components/Post'
import { gql, graphql } from 'react-apollo'

class ListPage extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (this.props.location.key !== nextProps.location.key) {
      this.props.data.refetch()
    }
  }

  render() {
    if (this.props.data.loading) {
      return (
        <div className='flex w-100 h-100 items-center justify-center pt7'>
          <div>
            Loading...
          </div>
        </div>
      )
    }

    let blurClass = ''

    if (this.props.location.pathname !== '/') {
      blurClass = ' blur'
    }

    return (
      <div className={'w-100 flex justify-center pa6' + blurClass}>
        <div className='w-100 flex flex-wrap' style={{maxWidth: 1150}}>
          {this.props.data.allPosts.map(post => (
            <Post
              key={post.id}
              post={post}
              refresh={() => this.props.data.refetch()}
            />
          ))}
          <Link
            to='/create'
            className='ma3 box new-post br2 flex flex-column items-center justify-center ttu fw6 f20 black-30 no-underline'
          >
            <img
              src={require('../assets/plus.svg')}
              alt=''
              className='plus mb3'
            />
            <div>Report Issue</div>
          </Link>
        </div>

      </div>
    )
  }
}

const FeedQuery = gql`query allPosts {
  allPosts(orderBy: createdAt_DESC) {
    id
    description
    title
    location
    file {
      url
    }
  }
}`

const ListPageWithData = graphql(FeedQuery, {
  options: {
    fetchPolicy: 'network-only'
  },
})(ListPage)

export default ListPageWithData

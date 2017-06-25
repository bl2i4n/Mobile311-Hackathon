import React from 'react'
import { gql, graphql } from 'react-apollo'
import Modal from 'react-modal'
import modalStyle from '../constants/modalStyle'
import {withRouter} from 'react-router-dom'

const detailModalStyle = {
  overlay: modalStyle.overlay,
  content: {
    ...modalStyle.content,
    height: 761,
  },
}

class DetailPage extends React.Component {

  render() {
    if (this.props.data.loading) {
      return (
        <div className='flex w-100 h-100 items-center justify-center pt7'>
          <div>
            Loading
            (from {process.env.REACT_APP_GRAPHQL_ENDPOINT})
          </div>
        </div>
      )
    }

    const {Post} = this.props.data

    return (
      <Modal
        isOpen
        contentLabel='Create Post'
        style={detailModalStyle}
        onRequestClose={this.props.history.goBack}
      >
        <div
          className='close fixed right-0 top-0 pointer'
          onClick={this.props.history.goBack}
        >
          <img src={require('../assets/close.svg')} alt='' />
        </div>
        <div
          className='delete ttu white pointer fw6 absolute left-0 top-0 br2'
          onClick={this.handleDelete}
        >
          Delete
        </div>
        <div
          className='bg-white detail flex flex-column no-underline br2 h-100'
        >

        <img
          src={Post.file.url}
          role='presentation'
          className='w-50 mv3'
          style={{
            paddingTop: '15%',
            paddingBottom: '2em',
          }}
        />

          <div className='flex items-center black-80 fw3 info'>
            {Post.title}
          </div>
          <div className='flex items-center black-80 fw3 info'>
            {Post.description}
          </div>
          <div className='flex items-center black-80 fw3 info'>
            {Post.location}
          </div>
        </div>
      </Modal>
    )
  }

  // would be nice to trigger a "deleting... -> deleted." snackbar-style notification
  // while this runs
  handleDelete = async () => {
    await this.props.mutate({variables: {id: this.props.data.Post.id}})

    // post is gone, so remove it from history stack
    this.props.history.replace('/')
  }
}

const deleteMutation = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`

const PostQuery = gql`
  query post($id: ID!) {
    Post(id: $id) {
      id
      description
      title
      location
      file {
        url
      }
    }
  }
`

// update w/ react-router v4 url params api
//
// see documentation on computing query variables from props in wrapper
// http://dev.apollodata.com/react/queries.html#options-from-props
const DetailPageWithData = graphql(PostQuery, {
  options: ({match}) => ({
    variables: {
      id: match.params.id,
    },
  }),
})(DetailPage)

const DetailPageWithDelete = graphql(deleteMutation)(DetailPageWithData)

export default withRouter(DetailPageWithDelete)

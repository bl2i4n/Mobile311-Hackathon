import React from 'react'
import { withRouter } from 'react-router-dom'
import { gql, graphql} from 'react-apollo'
import Modal from 'react-modal'
import modalStyle from '../constants/modalStyle'

class CreatePage extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    description: '',
    location: '',
    imageUrl: '',
    file: '',
    title: '',
  };
  this._handleImageChange = this._handleImageChange.bind(this);
  this._handleSubmit = this._handleSubmit.bind(this);
}

_handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imageUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
  //  let {imageUrl} = this.state;

    return (
      //modal for image url and description
      <Modal
        isOpen
        contentLabel='Create Post'
        style={modalStyle}
        onRequestClose={this.props.history.goBack}
      >
        <div className='pa4 flex justify-center bg-white'>
          <div style={{maxWidth: 400}} className=''>
            {this.state.imageUrl &&
              <img
                src={this.state.imageUrl}
                role='presentation'
                className='w-100 mv3'
              />}
            <input
              className='w-100 pa3 mv2'
              value={this.state.title}
              placeholder='Title'
              onChange={e => this.setState({title: e.target.value})} //holds value
              autoFocus
            />

            <input
              className='w-100 pa3 mv2'
              value={this.state.location}
              placeholder='Address of Issue'
              onChange={e => this.setState({location: e.target.value})} //holds value
            />

            <input
              className='w-100 pa3 mv2'
              value={this.state.description}
              placeholder='Description'
              onChange={e => this.setState({description: e.target.value})} //holds value
            />

            <div>
              <form onSubmit={this._handleSubmit} className='w-100 pa3 mv2'>
                <input type="file" onChange={this._handleImageChange} />
                </form>
              </div>

            {this.state.title &&
              this.state.location && this.state.description && this.state.imageUrl &&
              <button
                className='pa3 bg-black-10 bn dim ttu pointer'
                onClick={this.handlePost}
              >
                Post
              </button>}
          </div>
        </div>

      </Modal>
    )
  }

  handlePost = async () => {
    const {description, imageUrl, title, location} = this.state
    await this.props.addPost({variables: {description, imageUrl, title, location}})

    window.location.pathname = '/'
  }
}

const addMutation = gql`
  mutation addPost($imageUrl: String!, $description: String!, $title: String!, $location: String!) {
    createPost(imageUrl: $imageUrl, description: $description, title: $title, location: $location) {
      id
      imageUrl
      description
      title
      location
    }
  }
`

const PageWithMutation = graphql(addMutation, {name: 'addPost'})(CreatePage)

export default withRouter(PageWithMutation)

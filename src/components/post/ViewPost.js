import React from "react";
import {Component} from "react/cjs/react.production.min";
import PostService from "../../services/post/PostService";

class ViewPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            post: {}
        }
    }
    cancel(){
        this.props.history.push('/posts');
    }
    componentDidMount(){
        PostService.getPostById(this.state.id).then( res => {
            this.setState({post: res.data});
        })
    }

    render() {
        return (
            <div>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Post</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Title: </label>
                            <div> { this.state.post.title}</div>
                        </div>
                        <div className = "row">
                            <label> Author: </label>
                            <div> { this.state.post.createBy }</div>
                        </div>
                        <div className = "row">
                            <label> Publisher: </label>
                            <div> { this.state.post.content }</div>
                        </div>
                        <button className="btn btn-danger" onClick={this.cancel.bind(this)}
                                style={{marginLeft: "10px"}}>Back
                        </button>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewPost;

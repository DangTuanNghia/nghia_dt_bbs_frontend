import React from "react";
import {Component} from "react/cjs/react.production.min";
import PostService from "../../services/post/PostService";
import Pagination from "react-js-pagination";

class ListPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            page: {
                activePage: 1,
                itemsCountPerPage: 3,
                totalItemsCount: 1000,
                pageRangeDisplayed: 3
            }
        };
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    componentDidMount() {
        PostService.getAllPost().then((res) => {
            this.setState({
                posts: res.data,
                page: {
                    activePage: this.state.page.activePage,
                    itemsCountPerPage: this.state.page.itemsCountPerPage,
                    totalItemsCount: res.data.length,
                    pageRangeDisplayed: this.state.page.pageRangeDisplayed
                }
            });
        });

    }


    handlePageChange(pageNumber) {
        this.setState(
            {
                page: {
                    activePage: pageNumber,
                    itemsCountPerPage: this.state.page.itemsCountPerPage,
                    totalItemsCount: this.state.page.totalItemsCount,
                    pageRangeDisplayed: this.state.page.pageRangeDisplayed
                }
            }
        )
    }
    viewPost(id){
        this.props.history.push(`/view-post/${id}`);
    }

    render() {
        let sliceValue = this.state.page.activePage * this.state.page.itemsCountPerPage - 3;
        let display = this.state.posts;
        return (
            <div>
                <div className="container-fluid">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {display.slice(sliceValue, sliceValue + 3).map(
                            post =>
                                <div className="col" style={{marginTop: "2%"}} key={post.identifier.value}>
                                    <div className="card h-100" style={{marginTop: "1%"}}>
                                        <img
                                            className="card-img-top" src={post.thumbnail} alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title">{post.title}</h5>
                                            <p className="card-text text-truncate">{post.content}</p>
                                        </div>
                                        <div className="card-footer">
                                            <div className="row g-3">
                                                <div className="col-md-6">
                                                    <small className="text-muted">Author: {post.createBy}</small><br/>
                                                    <small className="text-muted">{post.createdAt}</small>
                                                </div>
                                                <div className="col-md-6">
                                                    <button className="btn btn-light" type="submit"
                                                            onClick={ () => this.viewPost(post.identifier.value)}
                                                            style={{marginLeft: "42%"}}>Read More</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        )
                        }
                    </div>
                    <Pagination
                        activePage={this.state.page.activePage}
                        itemsCountPerPage={this.state.page.itemsCountPerPage}
                        totalItemsCount={this.state.page.totalItemsCount}
                        pageRangeDisplayed={this.state.page.pageRangeDisplayed}
                        onChange={this.handlePageChange}
                        itemClass="page-item"
                        linkClass="page-link"
                    />
                </div>
            </div>
        );
    }
}

export default ListPost
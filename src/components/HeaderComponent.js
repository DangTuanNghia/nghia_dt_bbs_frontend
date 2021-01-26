import React from "react";
import {Component} from "react/cjs/react.production.min";

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">HOME</a>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <a className="nav-link" aria-current="page" href="#">Post</a>
                                    <a className="nav-link" href="#">NewPost</a>
                                    <a className="nav-link" href="#">User</a>
                                </div>
                            </div>
                            <form className="d-flex">
                                    <button className="btn btn-light" type="submit">Login</button>
                            </form>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
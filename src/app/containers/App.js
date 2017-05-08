import React from "react";
import {connect} from "react-redux";

import { Header } from "../components/Header";
import { Home } from "../components/Home";


class App extends React.Component {

    render() {
        return (
            <div className="container">
                <Header homeLink={"Product"} />
                <Home changeCost={this.props.increaseCost} product={this.props.product}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.product,
        dealer: state.dealer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increaseCost: (increase) => {
            dispatch({
                type: "INCREASE_COST",
                value: increase
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
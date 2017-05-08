import React from "react";
import PropTypes from 'prop-types';

export const Home = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    Product Name: { props.product.name }
                    <br/>
                    Product Cost: { props.product.cost }
                    <hr/>
                    <button onClick={() => props.changeCost(5)} className="btn btn-primary">Increase Cost</button>
                </div>
            </div>
        </div>
    );
}

Home.propTypes = {
    product: PropTypes.object
}


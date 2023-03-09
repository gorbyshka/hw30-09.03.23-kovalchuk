import React from "react";

class Price extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: false
        };

        this.fillBackground = this.fillBackground.bind(this);

    }

    fillBackground() {
        this.setState(state => ({
            id: !state.id
        }));
    }

    render() {
        if (this.state.id) {
            return (
                <>
                    <small className="price-one"><s>{this.props.name}</s></small>
                    <div className="price">
                        <h2>{this.props.name2}</h2>
                        <a href="#" id="cart" onClick={this.fillBackground}>
                            <span class="material-symbols-outlined">shopping_cart</span>
                        </a>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <small className="price-one"><s>{this.props.name}</s></small>
                    <div className="price">
                        <h2>{this.props.name2}</h2>
                        <a href="#" id="cart2" onClick={this.fillBackground}>
                            <span class="material-symbols-outlined">shopping_cart</span>
                        </a>
                    </div>
                </>
            );
        }
    }
}

export default Price
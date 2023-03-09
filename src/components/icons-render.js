import React from "react";

class Icons extends React.Component {
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

                <div className="block-icons">

                    <a href="#">
                        <span onClick={this.fillBackground} id="heart" class="material-symbols-outlined">favorite</span>
                    </a>
                    <a href="#">
                        <span id="move" class="material-symbols-outlined">move_up</span>
                    </a>

                </div>
            );
        } else {
            return (

                <div className="block-icons">

                    <a href="#">
                        <span onClick={this.fillBackground} id="heart2" class="material-symbols-outlined">favorite</span>
                    </a>
                    <a href="#">
                        <span id="move" class="material-symbols-outlined">move_up</span>
                    </a>

                </div>
            );
        }
    }
}

export default Icons
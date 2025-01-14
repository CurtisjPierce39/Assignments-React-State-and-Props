import { Component } from "react";
import { string } from 'prop-types';
import './styles.css'


class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: this.props.initialName
        }

        this.changeName = this.changeName.bind(this)
    }

    changeName() {
        this.setState({name: "Alex"});
    }

    render() {
        return (
            <div>
                <h1>User Profile</h1>
                <p className='userprofile'>Name: {this.state.name}</p>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}

UserProfile.propTypes = {
    initialName: string,
}

UserProfile.defaultProps = {
    initialName: "Curtis Pierce"
}

export default UserProfile
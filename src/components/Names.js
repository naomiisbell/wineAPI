import React from 'react'
import axios from 'axios'


class Names extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            info: []
        }
    }

    componentDidMount() {
        axios.get('http://myapi-profstream.herokuapp.com/api/549366/wines/')
        .then(res => this.setState({ info: res.data}))
        .catch(e => console.error(e.message));
    }

    render() {
        return (
            <div>
                <h1>List of Wine Names</h1>
                {
                    this.state.info.map((wines, id) => {
                        console.log(wines);
                        return(
                            <div className="wines" key={id}>
                                <ul>
                                    <li>{ wines.name }</li>
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Names;
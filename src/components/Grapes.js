import React from 'react'
import axios from 'axios'

class Grapes extends React.Component {
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
                <h1>Grapes</h1>
                {
                    this.state.info.map((wines, id) => {
                        console.log(wines);
                        return(
                            <div className="wines" key={id}>
                                <h4>{ wines.name }</h4>
                                <p>Grapes: { wines.grapes }</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Grapes;
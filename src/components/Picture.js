import React from 'react'
import axios from 'axios'

class Picture extends React.Component {
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
                <h1>Pictures</h1>
                {
                    this.state.info.map((wines, id) => {
                        console.log(wines);
                        return(
                            <div className="wines" key={id}>
                                <h1>{ wines.name }</h1>
                                <h3>{ wines.year }</h3>
                                <img src={ wines.picture }></img>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Picture;
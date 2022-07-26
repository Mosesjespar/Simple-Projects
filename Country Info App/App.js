import React, { Component } from 'react'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }


    componentDidMount() {
        let api_url = 'https://restcountries.com/v2/all'
        fetch(api_url).then(respone => respone.json()).then(
            data => {
                console.log(data)
                this.setState({ data })
            }
        ).catch(e => console.log('Error: ', e))
    }

    render() {
        return (
            <div className='App'>
                <h1>React Country App</h1>
                <h1>Calling API</h1>
                <div>
                    <p>There are {this.state.data.length} countries in this file</p>
                    <div className='countries-wrapper'>
                        {this.state.data.map((country) => (
                            <div>
                                <div>
                                    {' '}
                                    <img src={country.flag} alt={country.name} width='100'/>{' '}
                                </div>
                                <div>
                                    <h1>{country.name}</h1>
                                    <p>Capital: {country.capital}</p>
                                    <p>Population: {country.population}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
export default App

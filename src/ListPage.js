import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getDoughnuts } from './api-utils.js';
import DonutSpinner from './DonutSpinner.js';

export default class ListPage extends Component {
    state = { 
        doughnuts: [],
        loading: false,
    }

    componentDidMount = async () => {
        this.setState({
            loading:true,
        });
        const doughnuts = await getDoughnuts();

        this.setState({
            doughnuts: doughnuts,
            loading: false,
        })
    }
    render() {
        return (
            <div className='doughnut-list'>
                { this.state.loading && <DonutSpinner />}

                { this.state.doughnuts.map(doughnut => <Link to={`/doughnuts/${doughnut.id}`} key={doughnut.name}>
                    <div className='doughnut'>
                    <p>{doughnut.name}</p>
                    <p>{doughnut.specialty
                        ? 'Specialty Doughnut'
                        : 'Normal Doughnut'}</p>
                    <p>{doughnut.price}</p>
                    <p>Baked by {doughnut.baker}</p>
                    </div>
                  </Link>  
                    )}
            </div>
        )
    }
}

import React, { Component } from 'react'
import { getDoughnut, getBakers, updateDoughnut, getBakerId} from './api-utils.js';
export default class DetailPage extends Component {
    state = {
        name: '',
        specialty: false,
        price: 1,
        baked_by_id: '',
        baker: ''
    }
    componentDidMount = async () => {
        const bakers = await getBakers();
        const doughnut = await getDoughnut(this.props.match.params.id)
        this.setState({
            name: doughnut.name,
            specialty: doughnut.specialty,
            price: doughnut.price,
            baked_by_id: doughnut.baked_by_id,
        })
        const thisBaker = bakers.find(baker => baker.id === this.state.baked_by_id );
        this.setState({
            baker: thisBaker.baked_by,
        })
        console.log(this.state.baker);
    }

    render() {

        return (
            <div>
                <p>
                    { this.state.name }
                </p>
                <p>
                    { this.state.specialty ? 'Specialty Doughnut'
                        : 'Normal Doughnut'}
                </p>
                <p>
                    { this.state.price }
                </p>
                <p>
                    { this.state.baked_by_id }
                </p>
                <p>
                    { this.state.baker }
                </p>
            </div>
        )
    }
}

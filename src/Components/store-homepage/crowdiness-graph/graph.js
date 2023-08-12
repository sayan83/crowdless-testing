import React,{Component} from 'react';
import {Chart} from 'react-charts';
import CrowdlessGraph from './graph/renderGraph';

class Graph extends Component {
    // series = React.useMemo(
    //     () => ({
    //         type: 'area'
    //     }),
    //     []
    // )
    // data = React.useMemo(
    //     () => [
    //         {
    //             label: 'Series 1',
    //             data: [ [1591719041000, 1], [1591719041000+3600000, 5], [1591719041000+3600000*2, 6], [1591719041000+3600000*3, 6],[1591719041000+3600000*4, 4],[1591719041000+3600000*5, 3],[1591719041000+3600000*6, 4],[1591719041000+3600000*7, 4],[1591719041000+3600000*8, 4],[1591719041000+3600000*9, 8],[1591719041000+3600000*10, 3]]
    //         }
    //     ],
    //     []
    // )

    // axes = React.useMemo(
    //     () => [
    //         { primary: true, type: 'time', position: 'bottom' },
    //         { type: 'linear', position: 'left' }
    //     ],
    //     []
    // )
    constructor(props) {
        super(props);

        this.state = {
            data : {
                label: 'Crowd',
                data: []
                // data: [ [1591719041000, 1], [1591719041000+3600000, 5], [1591719041000+3600000*2, 6], [1591719041000+3600000*3, 6],[1591719041000+3600000*4, 4],[1591719041000+3600000*5, 3],[1591719041000+3600000*6, 4],[1591719041000+3600000*7, 4],[1591719041000+3600000*8, 4],[1591719041000+3600000*9, 8],[1591719041000+3600000*10, 3]]
            },
            axes : [
                { primary: true, type: 'time', position: 'bottom' },
                { type: 'linear', position: 'left' }
            ]
        }
    }
    // componentDidUpdate = (oldProps,oldState) => {
    //     console.log('args',oldProps,oldState)
    //     console.log('state props',this.state,this.props)
    //     if(this.props.graphData && this.props.graphData.length !== this.state.data[0].data.length){
    //         this.setState({
    //             ...this.state,
    //             data : [{
    //                 label: 'Crowd',
    //                 data: [...this.props.graphData]
    //                 // data: [ [1591719041000, 1], [1591719041000+3600000, 5], [1591719041000+3600000*2, 6], [1591719041000+3600000*3, 6],[1591719041000+3600000*4, 4],[1591719041000+3600000*5, 3],[1591719041000+3600000*6, 4],[1591719041000+3600000*7, 4],[1591719041000+3600000*8, 4],[1591719041000+3600000*9, 8],[1591719041000+3600000*10, 3]]
    //             }],
    //         });
    //         console.log(this.state)
    //     }
    // }

    getXAxis = ({timestampstart,timestampend}) => {
        let diff = timestampend - timestampstart;
        // startHrs = new Date(timestampstart).getHours() + 1;
        // endHrs = new Date(timestampend).getHours()
        let i = timestampstart
        let data = [];
        while(i <= timestampend) {
            data.push([i,null])
            i += diff/10;
        }
        return {data,diff};
    }
    
    componentDidMount = () => {
        console.log(this.data,...this.props.graphData)
        const {data,diff} = this.getXAxis(this.props.timings)
        // blankData.push([1594371960000,5])
        // blankData.push([1594375960000])
        this.setState({
            ...this.state,
            data : {
                // label: 'Crowd',
                data: data,
                difference: diff
                // data: [ [1591719041000, 1], [1591719041000+3600000, 5], [1591719041000+3600000*2, 6], [1591719041000+3600000*3, 6],[1591719041000+3600000*4, 4],[1591719041000+3600000*5, 3],[1591719041000+3600000*6, 4],[1591719041000+3600000*7, 4],[1591719041000+3600000*8, null],[1591719041000+3600000*9, null],[1591719041000+3600000*10, null]]
            },
        })
        // if(this.props.graphData){
        //     this.setState({
        //         ...this.state,
        //         data : [{
        //             label: 'Crowd',
        //             data: [...this.props.graphData]
        //             // data: [ [1591719041000, 1], [1591719041000+3600000, 5], [1591719041000+3600000*2, 6], [1591719041000+3600000*3, 6],[1591719041000+3600000*4, 4],[1591719041000+3600000*5, 3],[1591719041000+3600000*6, 4],[1591719041000+3600000*7, 4],[1591719041000+3600000*8, null],[1591719041000+3600000*9, null],[1591719041000+3600000*10, null]]
        //         }],
        //     });
        //     console.log(this.state)
        // }
    }
    
    render() {
        console.log(this.props.graphData)
        const data = [{
            label: 'Crowd',
            data: [ [1591719041000, 1], [1591719041000+3600000, 5], [1591719041000+3600000*2, 6], [1591719041000+3600000*3, 6],[1591719041000+3600000*4, 4],[1591719041000+3600000*5, 3],[1591719041000+3600000*6, 4],[1591719041000+3600000*7, null],[1591719041000+3600000*8, null],[1591719041000+3600000*9, null],[1591719041000+3600000*10, null]]
        }];
        console.log(this.state);
        return (
            <div style={{width: '95%',height: '300px'}}>
                {console.log(this.state)}
                {/* <Chart data={this.state.data} axes={this.state.axes} /> */}
                <CrowdlessGraph initializeData={this.state.data} graphData = {this.props.graphData} />
            </div>
        );
    }
}

export default Graph;
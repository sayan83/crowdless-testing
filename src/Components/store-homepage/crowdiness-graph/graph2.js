import React,{Component} from 'react';
// var CanvasJSReact = require('../../../helper/canvasjschart/canvasjs.react');
import CanvasJSReact from '../../../helper/canvasjschart/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Graph2 extends Component {
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
            data : [{
                label: 'Crowd',
                data: []
                // data: [ [1591719041000, 1], [1591719041000+3600000, 5], [1591719041000+3600000*2, 6], [1591719041000+3600000*3, 6],[1591719041000+3600000*4, 4],[1591719041000+3600000*5, 3],[1591719041000+3600000*6, 4],[1591719041000+3600000*7, 4],[1591719041000+3600000*8, 4],[1591719041000+3600000*9, 8],[1591719041000+3600000*10, 3]]
            }],
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
    
    // componentDidMount = () => {
    //     console.log(this.data,...this.props.graphData)
    //     if(this.props.graphData){
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
    
    render() {
		const options = {
			animationEnabled: true,
			title:{
				text: "Crowdiness"
			},
			axisX: {
				valueFormatString: "MMM"
			},
			axisY: {
				title: "Current crowd",
			},
			data: [{
				yValueFormatString: "$#,###",
				xValueFormatString: "MMMM",
				type: "spline",
				dataPoints: [
					{ x: new Date(2017, 0), y: 25060 },
					{ x: new Date(2017, 1), y: 27980 },
					{ x: new Date(2017, 2), y: 42800 },
					{ x: new Date(2017, 3), y: 32400 },
					{ x: new Date(2017, 4), y: 35260 },
					{ x: new Date(2017, 5), y: 33900 },
					{ x: new Date(2017, 6), y: 40000 },
					{ x: new Date(2017, 7), y: 52500 },
					{ x: new Date(2017, 8), y: 32300 },
					{ x: new Date(2017, 9), y: 32400 },
					{ x: new Date(2017, 10), y: null },
					{ x: new Date(2017, 11), y: null }
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default Graph2;
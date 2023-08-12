import React, {Component} from 'react';
import './crowdinessGraph.css';
import Graph from './graph';
// import Graph2 from './graph2'
import config from '../../../config/config';
import SkeletonLoader from 'tiny-skeleton-loader-react';

var W3CWebSocket = require('websocket').w3cwebsocket;

class CrowdinessGraph extends Component {
    constructor(props) {
        super(props);

        this.state = {
            liveTrafficGraph: {
                loaded: false,
                graphData: [],
            }
        }
    }
    
    componentDidMount = () => {
        console.log(this.state)
        const storeId = this.props.storeId;
        //Add api call here
        //call setstate after api fetches data
        // let client = new W3CWebSocket(config.api.socketapi);
        // client.onerror = function() {
        //     console.log('Connection Error');
        //     alert('connection error!');
        // };
        
        // client.onopen = function() {
        //     console.log('WebSocket Client Connected');
        //     client.send(JSON.stringify({
        //         action: 'syncWithStore',
        //         storeId: storeId
        //     }))
        //     // function sendNumber() {
        //     //     if (client.readyState === client.OPEN) {
        //     //         var number = Math.round(Math.random() * 0xFFFFFF);
        //     //         client.send(number.toString());
        //     //         setTimeout(sendNumber, 1000);
        //     //     }
        //     // }
        //     // sendNumber();
        // };
        
        // client.onclose = function() {
        //     console.log('echo-protocol Client Closed');
        // };
        
        // client.onmessage = (e) => {
        //     console.log(e);
        //     let data = JSON.parse(e.data);
        //     if(data.status === 'SYNCED') {
        //         let graphPoint = data.graphData;
        //         if(graphPoint.length === 0) {
        //             this.props.countUpdate('N/A')
        //         }
        //         else {
        //             this.props.countUpdate(graphPoint[graphPoint.length-1][1])
        //         }
        //         console.log(graphPoint,this.state)
        //         this.setState({
        //             liveTrafficGraph: {
        //                 loaded: true,
        //                 available: true,
        //                 graphData: graphPoint
        //             }
        //         });
        //         console.log(this.state)
        //     }
        //     else if(data.status === 'GRAPH_UPDATED') {
        //         this.props.countUpdate(data.count);
        //         console.log(data.count)
        //         let graphPoint = [data.timestamp,data.count]
        //         console.log(graphPoint,this.state)
        //         this.setState({
        //             liveTrafficGraph: {
        //                 loaded: true,
        //                 available: true,
        //                 graphData: [...this.state.liveTrafficGraph.graphData,graphPoint]
        //             }
        //         });
        //         console.log(this.state)
        //     }
        //     else {
        //         this.setState({
        //             liveTrafficGraph: {
        //                 loaded: true,
        //                 available: true,
        //                 graphData: [...this.state.liveTrafficGraph.graphData]
        //             }
        //         });
        //     }
        //     // if (typeof e.data === 'string') {
        //     //     console.log("Received: '" + e.data + "'");
        //     // }
        // };
        // initializeFullGraph = (state) => {
        //     this.setState(state);
        // }
        // setTimeout(() => {
        //     this.setState({
        //         liveTrafficGraph: {
        //             loaded: true,
        //             available: true,
        //             notAvailableReason: 'Live Graph Currently Not Available',
        //         }
        //     });
        // },0);
        setTimeout(() => {
            let graphPoint = [ [1591678800000, 1], [1591678800000+3600000, 5], [1591678800000+3600000*2, 6], [1591678800000+3600000*3, 6],[1591678800000+3600000*4, 4],[1591678800000+3600000*5, 3],[1591678800000+3600000*6, 4],[1591678800000+3600000*7, 7]]
            this.props.countUpdate(graphPoint[graphPoint.length-1][1])
            this.setState({
                liveTrafficGraph: {
                    loaded: true,
                    available: true,
                    graphData: graphPoint
                }
            });
        },3200);
        // this.props.countUpdate(graphPoint[graphPoint.length-1][1])
        // this.setState({
        //     liveTrafficGraph: {
        //         loaded: true,
        //         available: true,
        //         graphData: graphPoint
        //     }
        // });
    }

    getStoreTimings = ({startTime,endTime}) => {
        console.log(startTime,endTime)
        startTime = '10:00:00' 
        endTime = '20:00:00'
        console.log(startTime,endTime)
        const date = new Date().toString()
        // const timestampstart = date.replace(date.substr(16,8),startTime)
        // const timestampend = date.replace(date.substr(16,8),endTime)
        //Replacing itmestampstart and end to match 9th june 2020 to plot graph
        const timestampstart = new Date(1591677000000)
        const timestampend = new Date(1591713000000)
        console.log("Manual timestamp done " + Date.parse(timestampend),timestampstart)
        return {timestampstart: Date.parse(timestampstart),timestampend: Date.parse(timestampend)}
    }

    render() {
        console.log(this.state.liveTrafficGraph.graphData)
        const timings = this.getStoreTimings(this.props.storeTime)
        return(
            <div className="graph-container">
                <div className="graph-heading">
                    LIVE FOOT-COUNT DATA
                </div>
                <div className="live-graph">
                    {this.state.liveTrafficGraph && this.state.liveTrafficGraph.loaded ?
                        this.state.liveTrafficGraph.available?<Graph graphData={this.state.liveTrafficGraph.graphData} timings={timings} />:this.state.liveTrafficGraph.notAvailableReason :
                        <SkeletonLoader width="90%"
                            style={{
                                margin: '0 auto',
                                height: '400px'
                            }} 
                        />
                    }
                </div>
            </div>
        )
    }
}

export default CrowdinessGraph;
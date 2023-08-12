import React,{ Component } from 'react';
import './renderGraph.css'


class CrowdlessGraph extends Component {
    constructor(props) {
        super(props)

        this.canvas = React.createRef()
        this.state = {
            graphXStartTime: null,
            graphYMaxValue: null,
            graphSkeletonDrawn: false,
            skeletonData: null,
        }
    }

    drawGraphSkeleton = (canvas,ctx) => {
        console.log('Graph Sketch done @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
        let height = canvas.offsetHeight;
        let width = canvas.offsetWidth;
        canvas.width = width;
        canvas.height = height;
        let xAxisWidth = 0.93 * width;
        let xAxisAdjustment = 0.05 * width;
        let yAxisHeight = 0.90 * height;
        //Draw the x-axis
        ctx.moveTo(xAxisAdjustment,yAxisHeight);
        ctx.lineTo(xAxisWidth+xAxisAdjustment,yAxisHeight);
        //Draw the y-axis
        ctx.moveTo(xAxisAdjustment,0)
        ctx.lineTo(xAxisAdjustment,yAxisHeight)
        //Draw markings on x-axis and y-axis
        let {data,difference} = this.props.initializeData;
        let xDivisions = xAxisWidth/10.0;
        let markerX = xAxisAdjustment + xDivisions
        for(let i = 1;i < 10;i++) {
            //Mark X-axis
            ctx.moveTo(markerX,yAxisHeight)
            ctx.lineTo(markerX,yAxisHeight+7)
            if(data && difference) {
                let date = new Date(data[i][0])
                let time = date.getHours() + ':' + date.getMinutes()
                if(time.length === 4)
                    time = time.replace(':',':0')
                ctx.font = "10px Arial"
                ctx.fillText(time,markerX-12,yAxisHeight+16)

            }
            markerX += xDivisions;
        }
        ctx.stroke();
        let skeletonData = ctx.getImageData(0,0,canvas.width,canvas.height);
        this.setState({
            graphXStartTime: data[0][0],
            graphSkeletonDrawn: true,
            skeletonData,
        })
        console.log('@@@@@@@',this.state)
    }

    drawYMargins = (canvas,ctx,yMax,totalVerticalSpace,xAxisAdjustment) => {
        let noOfMarkings = 10
        let markingSpacing = totalVerticalSpace/noOfMarkings
        let marker = totalVerticalSpace - markingSpacing
        let oneYUnitValue = yMax/noOfMarkings
        let currentYValue = oneYUnitValue

        while(marker > 0) {
            ctx.moveTo(xAxisAdjustment,marker)
            ctx.lineTo(xAxisAdjustment-7,marker)
            ctx.font = "10px Arial"
            ctx.fillText(Math.round(currentYValue*100)/100,xAxisAdjustment-30,marker+3)
            currentYValue += oneYUnitValue
            marker -= markingSpacing
        }
        ctx.stroke()
    }

    plotExistingGraph = (canvas,ctx,graphData) => {
        console.log('Plotting exiting graph @@@@@@@@@@@@@@@')
        let yMax = 0
        let { difference } = this.props.initializeData
        for(let i=0;i<graphData.length;i++) {
            if(graphData[i][1] > yMax) {
                yMax = graphData[i][1]
            }
        }
        yMax += Math.ceil(0.20 * yMax)
        let totalVerticalSpace = 0.90 * canvas.offsetHeight;
        let totalHorizontalSpace = 0.93 * canvas.offsetWidth;
        let xAxisAdjustment = 0.05 * canvas.offsetWidth;
        let oneVerticalUnit = totalVerticalSpace/yMax   // Value of 1px along y-axis
        let oneHorizontalUnit = totalHorizontalSpace/difference  // Value of 1px along x-axis
        console.log("Horizontal unit value" + oneHorizontalUnit)
        let xPointer = xAxisAdjustment, yPointer = totalVerticalSpace;
        let lastXValue = this.state.graphXStartTime,lastYValue = 0
        console.log(totalHorizontalSpace,this.state.graphXStartTime,difference)
        this.drawYMargins(canvas,ctx,yMax,totalVerticalSpace,xAxisAdjustment)
        // Add a gradient to the graph
        var grd = ctx.createLinearGradient(xAxisAdjustment, totalVerticalSpace, xAxisAdjustment, 0);
        grd.addColorStop(0, "#9748FC");
        grd.addColorStop(1, "#E96070");
        // ctx.fillStyle = grd;
        ctx.fillStyle = 'rgba(0,0,0,0)'
        // Gradient adding complete

        // Start tracing out a polygon for the area graph
        ctx.beginPath()
        ctx.lineWidth = 5
        // ctx.strokeStyle = 'rgba(200,200,200,1)'
        ctx.strokeStyle = grd
        for(let i=0;i<graphData.length;i++) {
            // ctx.moveTo(xPointer,yPointer)
            console.log('plotfrom',xPointer,yPointer,"$$$$$$$$$$$")
            xPointer += (graphData[i][0] - lastXValue)*oneHorizontalUnit;
            yPointer -= (graphData[i][1] - lastYValue)*oneVerticalUnit;
            ctx.lineTo(xPointer,yPointer)
            console.log('plotto',xPointer,yPointer,"$$$$$$$$$$$")
            lastXValue = graphData[i][0]
            lastYValue = graphData[i][1]
        }
        ctx.stroke()
        let currentGraphPointer = ctx.getImageData(0,0,canvas.width,canvas.height);
        ctx.strokeStyle = 'rgba(0,0,0,0)'
        ctx.lineTo(xPointer,totalVerticalSpace)           // Complete the polygon(make outlines transparent befor this)
        ctx.lineTo(xAxisAdjustment,totalVerticalSpace)    // Complete the polygon(make outlines transparent befor this)
        ctx.closePath()                                   // Polygon drawing ends
        ctx.fill()                                        // Add gradient
        ctx.stroke()                                      // Draw the graph
    }

    componentDidUpdate = () => {
        console.log('update triggered @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
        const canvas = this.canvas.current;
        const ctx = canvas.getContext('2d');
        if(!this.state.graphSkeletonDrawn)
            this.drawGraphSkeleton(canvas,ctx);
        if(this.props.graphData && this.state.graphSkeletonDrawn) {
            console.log(this.state)
            console.log(this.props.graphData)
            this.plotExistingGraph(canvas,ctx,this.props.graphData)
        }

    }

    // componentDidMount = () => {
    //     // const canvas = this.canvas.current;
    //     // const ctx = canvas.getContext('2d');
    //     // this.drawGraphSkeleton(canvas,ctx)
    //     this.forceUpdate()
    // }

    render() {
        console.log('@@@@!!!!',this.state)
        return (
            <div className='graph-container'>
                <canvas ref={this.canvas} className="graph-canvas" />
            </div>
        )
    }
}

export default CrowdlessGraph;
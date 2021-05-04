export class About extends React.Component{

    intervalId;
    componentDidMount(){
        this.intervalId=setInterval(()=>{
            console.log('i am an interval in the About Page.')
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.intervalId);
    }
    render(){
        return <h1>ABOUT US PAGE </h1>
    }

} 
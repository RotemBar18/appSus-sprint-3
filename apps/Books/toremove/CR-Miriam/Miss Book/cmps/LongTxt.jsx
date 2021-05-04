const MAX_CHARS_COUNT = 100;

export class LongTxt extends React.Component {
    state = { 
        description: '', 
        isLongTxtShown: false
    } 
    toggleIsLongTxtShown = () => {
        const { isLongTxtShown } = this.state

        this.setState({ isLongTxtShown: !isLongTxtShown }, () => {
            console.log(this.state.isLongTxtShown)
        });
    }

    render() {
        const { description } = this.props
        const { isLongTxtShown } = this.state

        let text = description;
        return (
            <p>
                {isLongTxtShown ? text : text.substring(0, 96) + '...'}
                <span onClick={this.toggleIsLongTxtShown}>{isLongTxtShown ? ' [Read Less]' : ' [Read More]'}</span>
            </p>
        )
        // if (description.length > MAX_CHARS_COUNT) {
        //     if (isLongTxtShown) {
        //         return <p>{text}<span onClick={this.toggleIsLongTxtShown}> [Read less]</span></p>
        //     }
        //     else {
        //         text = "Description - " + description.substring(0, MAX_CHARS_COUNT - 4); 
        //         return <p>{text}<span onClick={this.toggleIsLongTxtShown}>... [Read more]</span></p>
        //     }
        // }
        // else {
        //     return <p>{text}</p>
        // }
    }
}
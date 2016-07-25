import React from 'react'

var Input = React.createClass({
    render: function(){
        var pinNumbers = this.props.pin.map(function(num, index){
            return num.n
        }).join('')
        return(
            <div>
                <textArea
                    className="form-control"
                    readOnly
                    placeholder="Use keypad to enter account number"
                    value={pinNumbers}
                    >
                    </textArea>
                <button
                    onClick={this.props.handleGetPin.bind(null, pinNumbers)}
                    className="btn btn-default"
                    disabled={pinNumbers.length===0}
                    >Enter</button>
                    <button
                    onClick={this.props.handleRm}
                    className="btn btn-default"
                    disabled={pinNumbers.length===0}
                    >Back</button>
            </div>
        )
    }
})

export default Input
import React from 'react'
import './App.css'

var Keypad = React.createClass({
    
    render: function(){
        var self = this
        var keys = this.props.keys.map(function(k, index){
            return (
                <tr className="button-row" key={index}>
                    <td>
                        <button
                            className="keypad-buttons"
                            onClick={self.props.number.bind(null, k.k)}
                            >{k.k}</button>
                    </td>
                </tr>
            )
        })
        return(
            <div className="keypad">
                <table>
                    <thead>{keys}</thead>
                </table>
               
            </div>
        )
    }
})

export default Keypad;
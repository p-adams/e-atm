import React from 'react'

var Withdraw = React.createClass({
    render: function(){
        return(
            <div className="withdraw">
            Withdraw menu
                <table>
                    <thead>
                        <tr>
                            <td><button>$10</button></td>
                            <td><button>$20</button></td>
                        </tr>
                        <tr>
                            <td><button>$50</button></td>
                            <td><button>$100</button></td>
                        </tr>
                    </thead>
                </table>
            </div>
        )
    }
})

export default Withdraw
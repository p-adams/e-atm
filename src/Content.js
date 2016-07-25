import React from 'react'

var Content = React.createClass({
    render: function(){
        return(
            <div>
                <button
                    className="btn btn-submit"
                    onClick={this.props.logout}
                    >Logout</button>
            </div>

        )
    }
})
export default Content;
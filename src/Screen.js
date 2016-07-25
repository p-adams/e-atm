import React from 'react';
import './App.css';
import MenuButtons from './MenuButtons.js'
import Content from './Content.js'
import Input from './Input.js'

var Screen = React.createClass({
    render: function(){

        return(
        
            <div className="screen">
            {!this.props.logged ? 
                <Input
                    pin={this.props.pin}
                    handleGetPin={this.props.handleGetPin}
                    handleRm={this.props.handleRm}
                    /> : 
                <div className="row">
                    <div className="col-sm-6">
                        <Content logout={this.props.logout}/>
                    </div>
                    <div className="col-sm-4">
                          <MenuButtons/>
                    </div>
                </div>
            }
            </div>    
        )
    }
})

export default Screen;

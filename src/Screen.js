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
                    logged={this.props.logged}
                    login={this.props.login}
                    pin={this.props.pin}
                    handleRm={this.props.handleRm}
                    /> 
                    : 
                <div className="row">
                    <div className="col-sm-6">
                        <Content
                            accounts={this.props.accounts}
                            showBalance={this.props.showBalance}
                            withdraw={this.props.withdraw}
                            deposit={this.props.deposit}
                            current={this.props.current}
                            depositAmount={this.props.depositAmount}
                            handleDeposit={this.props.handleDeposit}
                            handleRm={this.props.handleRm}
                            amounts={this.props.amounts}

                        
                            />
                    </div>
                    <div className="col-sm-4">
                          <MenuButtons
                           accounts={this.props.accounts}
                           balance={this.props.balance}
                           handleWithdraw={this.props.handleWithdraw}
                            depositMenu={this.props.depositMenu}
                           logout={this.props.logout}/>
                    </div>
                </div>
            }
            </div>    
        )
    }
})

export default Screen;

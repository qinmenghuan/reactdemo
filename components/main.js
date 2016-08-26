/**
 * Created by qmh on 2016/8/26.
 */

import React from 'react'

class Main extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<div>
            hahahah9
            <div>
                {this.props.children}
            </div>
        </div>);
    }
}

export default Main;
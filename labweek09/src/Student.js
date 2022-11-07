import React, {Components} from "react"
import PropType from 'prop-types'

class Student extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                <h3>{this.props.studentId}</h3>
                <h4>{this.props.fullName}</h4>
            </>
        )
    }
}

export default Student
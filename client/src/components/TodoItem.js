import React, { Component } from 'react'
import styled from 'styled-components'
// import {connect} from 'react-redux'

const ItemWrapper = styled.div`
    width:50%;
    background-color: #3d6fe9;
    border-radius: 10px;
    padding: 10px;
    margin-top: 20px;
    display:flex;
    flex-direction:row;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;

`

const StyledCheckbox = styled.input`
    margin: 10px;
`

const StyledText = styled.p`
    margin: 8px;
    color: #fff;
    width:90%;
`

const StyledButton = styled.button`
    width: 10%;
    color: white;
    background-color: #5b73a7;
    border: 1px solid white;
    border-radius: 10px;
    margin-left: 10px;
`

class TodoItem extends Component {

  render() {
    let {text,id} = this.props;  
    return (
      <ItemWrapper>
          <StyledCheckbox type="checkbox" />
          <StyledText>{text}</StyledText>
          <StyledButton onClick={() => this.props.handler(text)}>Delete</StyledButton>
      </ItemWrapper>
    )
  }
}

// const mapDispatchToProps = dispatch => ({
//     delete_action: (id) => dispatch(delete_action(id))
// })


export default TodoItem;
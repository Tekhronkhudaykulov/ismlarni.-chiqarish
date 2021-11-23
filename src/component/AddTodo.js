import React, {useState} from 'react'
import { addTodo } from '../store/action/todo';
import { connect } from 'react-redux';
const AddTodo = ({addTodo}) => {
    const [value, setValue] = useState('');
    return (
    <div className="inputvsButton">
        <input type="text" 
        placeholder="Ismlarni kiritng..."
        onChange={event => {
            setValue(event.target.value);
            console.log(setValue)
        }}
        value={value}
        onKeyDown={event => {
          if(event.keyCode === 13){
            addTodo(value)
            setValue('')
          }
        }}
        />
        <button>Qo`shish</button>
  </div>
    )
}

const mapDispatchToProps = ({
    addTodo
})
export default connect (null, mapDispatchToProps) (AddTodo)

import './style.scss';
import { connect } from 'react-redux';
import TodoItem from './component/TodoItem';
import AddTodo from './component/AddTodo';
import { deleteTodo } from './store/action/todo';
const App = ({todos, deleteTodo}) => {
  return (
     <div className="all">
        <h1>Ismlarini Royhatini qoshish</h1>
        <AddTodo/>
        <div className="items">
          <div className="content">
              {
                todos.map(item => (
                  <TodoItem  title={item.title}
                             deleteTodo={() => deleteTodo(item.id)}
                  />
                ))
              }
          </div>
        </div>
     </div>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todo.todos
})

const mapDispatchToProps = ({
  deleteTodo
})

export default connect(mapStateToProps, mapDispatchToProps) (App);

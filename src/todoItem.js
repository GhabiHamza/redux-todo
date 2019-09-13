import React,{Component} from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import {connect} from 'react-redux';



class TodoItem extends Component{


    
    render(){

        const {item,id,onDelete,onEdit,onThrough} = this.props
        return(
        <div className='item-todo'>
           
           <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <Input addon type="checkbox" aria-label="Checkbox for following text input" />
          </InputGroupText>
        </InputGroupAddon>
        <Input type="text"onClick={()=>onThrough(id)} style={{textDecoration:(item.test)?'line-through':'none'} }value={item.titre} />
      </InputGroup>
        <button type="button"onClick={()=>onEdit(item)}><i class="fas fa-edit fa-lg icon-edit"></i></button>
        <button type="button" onClick={()=>onDelete(id)} ><i class="fas fa-trash-alt fa-lg icon-delete"></i></button>
      
        </div>

    )
}
}
const mapDispatchToProps=dispatch=>{
    return{
        onDelete:(id)=>{
        
        dispatch({
            
            type:'DELETEMOVIES',
            id

            
        })
        },
        onEdit:(item)=>{
            dispatch({
                type:'EDITMOVIES',
                id:item.id,
                item: {
                    id:item.id,
                    titre:prompt('titre:',item.titre)
                }


            })
        
        },
        onThrough:(id)=>{
            dispatch({
                type:'THROUGHITEM',
                id
            })
            
        }
        
    }
}

const TodoItemFilter=connect(null,mapDispatchToProps)(TodoItem)
export default TodoItemFilter;
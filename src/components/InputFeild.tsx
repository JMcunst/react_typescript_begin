import React from 'react'
import './style.css'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void;
}

const InputFeild: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    return (
        <form className='input' onSubmit={handleAdd}>
            <input type='input'
                value={todo} onChange={
                    (e) => setTodo(e.target.value)
                } placeholder='Enter a Name' className='input__box'>
            </input>
            <button className='input_submit' type='submit'>
                GO
            </button>
        </form>
    )
}

export default InputFeild
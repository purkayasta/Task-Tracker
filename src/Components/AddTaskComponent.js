import { useState } from 'react';

export const AddTaskComponent = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [day, setTime] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        onAdd({ name, day });

        setName('');
        setTime('');
    };

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task'
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Time</label>
                <input type='text' placeholder='Add Time'
                    value={day}
                    onChange={(e) => setTime(e.target.value)} />
            </div>
            <input className='btn btn-block' type='submit' value='Add' />
        </form>
    )
}

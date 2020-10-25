const initialData = {
    tasks: {
        'task-1': {id:'task-1', content:'take out the garbage,take out the garbage,take out the garbage', date:'12-10-2020 12:11:00'},
        'task-2': {id:'task-2', content:'Watch my favourite show ', date:'12-10-2020 12:11:00'},
        'task-3': {id:'task-3', content:'Charge my phone',date:'12-10-2020 12:11:00'},
        'task-4': {id:'task-4', content:'Cook dinner',date:'12-10-2020 12:11:00'}
    },
    columns:{
        'column-1':{
            id: 'columns-1',
            title: 'Suspended tasks',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4' ],
            state: 0
        },
        'column-2':{
            id: 'columns-2',
            title: 'Todo tasks',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4' ],
            state: 1
        },
        'column-3':{
            id: 'columns-3',
            title: 'In progress tasks',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4' ],
            state: 2
        },
        'column-4':{
            id: 'columns-4',
            title: 'Performed task',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4' ],
            state: 3
        },        
    },
    columnOrder: ['column-1','column-2','column-3', 'column-4' ],
}


export default initialData
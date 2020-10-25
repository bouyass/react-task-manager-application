const initialData = {
    tasks: {
        'task-1': {id:'task-1', content:'take out the garbage,take out the garbage,take out the garbage', date:'12-10-2020 12:11:00'},
        'task-2': {id:'task-2', content:'Watch my favourite show ', date:'12-10-2020 12:11:00'},
        'task-3': {id:'task-3', content:'Charge my phone',date:'12-10-2020 12:11:00'},
        'task-4': {id:'task-4', content:'Cook dinner',date:'12-10-2020 12:11:00'},
        'task-5': {id:'task-5', content:'take out the garbage,take out the garbage,take out the garbage', date:'12-10-2020 12:11:00'},
        'task-6': {id:'task-6', content:'Watch my favourite show ', date:'12-10-2020 12:11:00'},
        'task-7': {id:'task-7', content:'Charge my phone',date:'12-10-2020 12:11:00'},
        'task-8': {id:'task-8', content:'Cook dinner',date:'12-10-2020 12:11:00'},
        'task-9': {id:'task-9', content:'take out the garbage,take out the garbage,take out the garbage', date:'12-10-2020 12:11:00'},
        'task-10': {id:'task-10', content:'Watch my favourite show ', date:'12-10-2020 12:11:00'},
        'task-11': {id:'task-11', content:'Charge my phone',date:'12-10-2020 12:11:00'},
        'task-12': {id:'task-12', content:'Cook dinner',date:'12-10-2020 12:11:00'},
        'task-13': {id:'task-13', content:'take out the garbage,take out the garbage,take out the garbage', date:'12-10-2020 12:11:00'},
        'task-14': {id:'task-14', content:'Watch my favourite show ', date:'12-10-2020 12:11:00'},
        'task-15': {id:'task-15', content:'Charge my phone',date:'12-10-2020 12:11:00'},
        'task-16': {id:'task-16', content:'Cook dinner',date:'12-10-2020 12:11:00'},
        'task-17': {id:'task-17', content:'take out the garbage,take out the garbage,take out the garbage', date:'12-10-2020 12:11:00'},
        'task-18': {id:'task-18', content:'Watch my favourite show ', date:'12-10-2020 12:11:00'},
        'task-19': {id:'task-19', content:'Charge my phone',date:'12-10-2020 12:11:00'},
        'task-20': {id:'task-20', content:'Cook dinner',date:'12-10-2020 12:11:00'}
    },
    scheduledTasks:{

    },
    columns:{
        'column-1':{
            id: 'column-1',
            title: 'Suspended tasks',
            taskIds: ['task-1', 'task-2', 'task-3'],
            state: 0
        },
        'column-2':{
            id: 'column-2',
            title: 'Todo tasks',
            taskIds: ['task-16',],
            state: 1
        },
        'column-3':{
            id: 'column-3',
            title: 'In progress tasks',
            taskIds: ['task-8', 'task-9', 'task-10', ],
            state: 2
        },
        'column-4':{
            id: 'column-4',
            title: 'Performed task',
            taskIds: ['task-12', ],
            state: 3
        },        
    },
    columnOrder: ['column-1','column-2','column-3', 'column-4' ],
    scheduledTasksIds:[]
}


export default initialData
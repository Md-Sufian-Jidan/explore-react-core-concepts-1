// export default function ToDo() {
//     return (
//         <li>Task : {task}</li>
//     )
// }

// Conditional rendering option-1
// export default function ToDo({task, isDone}){
//     if(isDone === true){
//         return <li>Finished :{task}</li>
//     }
//     else{
//         return <li>Finished : {task}</li>
//     }
// }


// Conditional Rendering Option-2
// export default function ToDo({task, isDone}){
//     if(isDone){
//         return <li>Finished : {task}</li>
//     }
//     return <li>Work On : {task}</li>
// }

//Conditional Rendering option-3 Ternary operator
// export default function ToDo({task, isDone}) {
//     return (
//         <li>Task : {isDone? 'Finished': 'Work On'} : {task}</li>
//     )
// }

// Conditional Rendering option-4 &&
// export default function ToDo({task,  isDone}) {
//     return (
//         <li>{task} {isDone && ': Done'}</li>
//     )
// }

//Conditional Rendering option-5 ||
// export default function ToDo({task,  isDone}) {
//     return (
//         <li>{task} {isDone || ': Do it'}</li>
//     )
// }

//conditional Rendering option-6 with variable
export default function ToDo({task, isDone}){
    let listItems;
        if(isDone){
            listItems = <li>Finished : {task}</li>
        }
        else{
            listItems = <li>Work On : {task}</li>
        }
        return listItems;
    }
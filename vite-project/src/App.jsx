import tasks from "../assets/tasks";


function App() {

  const completedArray = [];
  const currentArray = [];

  tasks.forEach((obj, index) => {
    if (obj.state === "completed") {
      completedArray.push(obj)
    } else {
      currentArray.push(obj)
    }
  })
  console.log(completedArray);



  const currentTask = () => {
    return currentArray.map((obj, index) => (<li key={obj.id}><strong>{obj.title}</strong> <span className={obj.state}>{obj.state}</span><br />Priority: {obj.priority} <br />Est.time {obj.estimatedTime}</li>))
  };

  const completedTask = () => {
    return completedArray.map((obj, index) => (<li key={obj.id}><strong>{obj.title}</strong> <span className={obj.state}>{obj.state}</span><br />Priority: {obj.priority} <br />Est.time {obj.estimatedTime}</li>))
  };


  return (
    <>

      <section className="header"> <h2>Task Manager</h2></section>
      <section className="container">
        <h4 className="task">Current Tasks (4)</h4>
        <ul className="task-ul">{currentTask()} </ul>
        <hr />
        <h4 className="task">Completed Tasks (6)</h4>
        <ul className="task-ul">{completedTask()}</ul>
      </section>

    </>
  )
}

export default App

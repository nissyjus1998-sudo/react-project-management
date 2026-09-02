import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSideBar from "./components/ProjectsSideBar";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState]= useState({
    selectedProjectId: undefined,
    projects: [], tasks: []
  });
   function onAddTask(text){
      setProjectState(prevState =>{
      const taskId = Math.random()
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId
      }
      return{
        ...prevState,
        selectedProjectId : undefined,
        tasks:[...prevState.tasks, newTask]
      }
    }

    )
   }
     function onDeleteTask(id){
     setProjectState(prevState => {
      return {
        ...prevState,
        
        tasks: prevState.tasks.filter((task) => task.id !== id)
      }
    })
   }
  function handleStartnewproject(){
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      }
    })
  }
   function handleCancelAddProject(){
     setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    })
   }
   function handleDeleteProject(){
     setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)
      }
    })
   }
   function handleSelectedproject(id){
     setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id
      }
    })
   }
  function handleAddProject(projectData){
    setProjectState(prevState =>{
      const projectId = Math.random()
      const newProject = {
        ...projectData,
        id: projectId
      }
      return{
        ...prevState,
        selectedProjectId : undefined,
        projects:[...prevState.projects, newProject]
      }
    }

    )
  }
  console.log(projectState,"state");
  const selectedProjects = projectState.projects.find(project  => project.id === projectState.selectedProjectId);
  let content = <SelectedProject project={selectedProjects} onDelete={handleDeleteProject}
   onAddTask={onAddTask} onDeleteTask={onDeleteTask} tasks={projectState.tasks}/>;
  if(projectState.selectedProjectId === null){
    content = <NewProject  onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  }else if(projectState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject ={handleStartnewproject}/>
  }
  return (
    <main className="h-screen my-8 flex gap-8">
     <ProjectsSideBar onStartAddProject ={handleStartnewproject} projects={projectState.projects} onSelect={handleSelectedproject} selectedProjectId={projectState.selectedProjectId}/>
     {content}
    </main>
  );
}

export default App;

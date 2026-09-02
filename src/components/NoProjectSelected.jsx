import Buttons from './Buttons.jsx'
import noProjectImage from '../assets/no-projects.png'
export default function NoProjectSelected({onStartAddProject}){
return (
    <div className='mt-24 text-center w-2/3'>
        <img src={noProjectImage} 
        alt='An empty task list'
         className='w-16 h-16 object-contain mx-auto'/>
        <h2 className='text-xl font-medium text-stone-500 my-4'>
            No Projects Selected
        </h2>
        <p className='text-stone-400 mb-4'>Select a project or get started witha new one</p>
        <p className='mt-8'>
            <Buttons onClick={onStartAddProject}>
                Create New Project
            </Buttons>
        </p>
    </div>
)
}
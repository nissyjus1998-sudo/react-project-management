import Buttons from './Buttons.jsx'
export default function ProjectsSideBar({ onStartAddProject, projects, onSelect, selectedProjectId }) {
    return <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
        <div>
            <Buttons onClick={onStartAddProject}> + Add Project</Buttons>
        </div>

        <ul className='mt-8'>
            {projects.map((project) => {
                let cssClassess = "w-full text-left px-2 py-1 rounded-sm my-1  hover:text-stone-200 hover:bg-stone-800"
                    if(project.id === selectedProjectId){
                        cssClassess += ' bg-stone-800 text-stone-200'
                    }else{
                        cssClassess += ' text-stone-400'
                    }
                return (
                    <li key={project.id}>
                        <button className= {cssClassess}
                            onClick={() => onSelect(project.id)}>
                            {project.title}
                        </button>

                    </li>);
            })}
        </ul>
    </aside>
}
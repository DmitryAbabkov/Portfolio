import React from 'react';

function ProjectList({selected, project}) {
    return (
        <div className='container_image'>
            {project.map((item, key) => {
                if(item.category === selected) return  <img key={key} src={item.img} alt="Project"/>
                if(selected === 'All') return <img key={key} src={item.img} alt="Project"/>
            }
            )}
        </div>
    );
}

export default ProjectList;

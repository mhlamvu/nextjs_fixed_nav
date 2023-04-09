import React from 'react'

const ProjectDescription = ({
    description,
    director,
    photographer
}) => {
  return (
    <section className="project-description-wrap">
        <p className="project-description">{description}</p>
        <p>&nbsp;</p>
        <p className="project-director">
            creative director: <span className="italic underline">{director}</span>
        </p>
        <p className="project-photographer">
            photographer: <span className="italic underline">{photographer}</span>
        </p>
    </section>
  )
}

export default ProjectDescription
import React from 'react'
import { useRouter } from 'next/router'
import { pageData } from '../../utils/data'

export default function ProjectNav() {
  const router = useRouter()
  const handleRouteChange = newRoute => {
    router.push(`/${newRoute}`)
  }

  const handleHome = newRoute => {
    router.push("/")
  }
  return (
    <ul className="project-nav">
      <li className='home'>
        <a onClick={() => handleHome("/")}>Home</a>
      </li>
        {pageData.map((project, index) => (
            <li key={index}>
                <a onClick={() => handleRouteChange(project.slug)}>
                    {project.title}
                </a>
            </li>
        ))}
    </ul>
  )
}

 
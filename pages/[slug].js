import React, { useEffect, useRef } from 'react'
import { pageData } from '../utils/data'
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import imagesloaded from 'imagesloaded'
import { useRouter } from 'next/router';

import MediaSection from '../components/SingleProject/MediaSection'
import ProjectDescription from '../components/SingleProject/ProjectDescription'

const preloadImages = selector => {
    return new Promise(resolve => {
        imagesloaded(document.querySelectorAll(selector), { background: true }, resolve)
    })
}

export default function SingleProject ({ project }) {

    const { scroll } = useLocomotiveScroll()
    const router = useRouter()
    const { slug } = router.query


    useEffect(() => {
        Promise.all([preloadImages('.media-image')]).then(() => {
            if(scroll) scroll.update()
        })
    }, [scroll, slug])

    
    if(!project) return null
    const [firstMedia, ...leftMedia] = project.media


    return (
        <div className='single-project page-wrapper'>
            <div 
                className='page-container' 
                data-scroll-section
                style={{
                    'page-container-background': project?.color
                }}
            >
                <div className='page-grid' data-scroll>
                    <MediaSection url={firstMedia.url} index={0} />
                    <ProjectDescription
                        description={project.about}
                        director={project.director}
                        photographer={project.photographer}
                    />

                    {leftMedia.map((media, index) => (
                        <MediaSection url={media.url} index={index + 1} key={index + 1} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export const getStaticPaths = async () => {
    const paths = pageData.map(project => ({
        params: { slug: project.slug }
    }))

    return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
    if(!params) throw new Error("No params")

    const project = pageData.find(project => project.slug === params.slug)

    return { props: { project } }
}
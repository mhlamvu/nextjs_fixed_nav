import 'locomotive-scroll/src/locomotive-scroll.scss';
import HomeListImage from '../components/HomeListImage';
import { pageData } from '../utils/data'

export default function Home() {
  return (
    <div className='home-list'>
      {pageData.map((project, index) => (
        <HomeListImage key={index} url={project.media[0].url} alt={project.about} slug={project.slug} />
      ))}
    </div>
  )
}

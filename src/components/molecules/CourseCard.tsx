import { TeacherCardList } from '@/components'

function CourseCard() {
  return (
    <article className='course-card'>
      <header className='course-card-header'>
        <span className='course-card-subtitle'>Course</span>
        <h2 className='course-card-title'>Sociales</h2>
        <p className='course-card-description'>
          Mixto <span>Students +144</span>
        </p>
      </header>
      <footer className='course-card-footer'>
        <span className='course-card-subtitle'>Teachers</span>
        <TeacherCardList />
      </footer>
    </article>
  )
}

export default CourseCard

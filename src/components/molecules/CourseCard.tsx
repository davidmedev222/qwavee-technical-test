import { TeacherCardList } from '@/components'
import { Course } from '@/models'

interface Props {
  course: Course
}

function CourseCard({ course }: Props) {
  return (
    <article className='course-card'>
      <header className='course-card-header'>
        <span className='course-card-subtitle'>Course</span>
        <h2 className='course-card-title'>{course.name}</h2>
        <p className='course-card-description'>
          {course.type} <span>Students +{course.totalStudents}</span>
        </p>
      </header>
      <footer className='course-card-footer'>
        <span className='course-card-subtitle'>Teachers</span>
        <TeacherCardList courseID={course.id} courseName={course.name} />
      </footer>
    </article>
  )
}

export default CourseCard

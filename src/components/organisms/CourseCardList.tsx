import { CourseCard } from '@/components'
import { getCourses } from '@/services'

async function CourseCardList() {
  const courses = await getCourses()

  return (
    <ul className='card-list'>
      {courses.map((course) => {
        const hasSubject = course.id !== '4'
        return <li key={course.id}>{hasSubject && <CourseCard course={course} />}</li>
      })}
    </ul>
  )
}

export default CourseCardList

'use client'
import { CourseCard } from '@/components'
import { getCourses } from '@/services'
import useSWR from 'swr'

function CourseCardList() {
  const { data: courses, error, isLoading } = useSWR('courses', getCourses, { revalidateOnFocus: false })

  if (error) return <div>ERROR LIST COURSES</div>
  if (isLoading) return <div>SKELETON LIST COURSES</div>

  return (
    <ul className='card-list'>
      {courses?.map((course) => {
        const hasSubject = course.id !== '4'
        return <li key={course.id}>{hasSubject && <CourseCard course={course} />}</li>
      })}
    </ul>
  )
}

export default CourseCardList

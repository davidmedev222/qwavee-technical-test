'use client'
import { CourseCard, CourseCardListSkeleton } from '@/components'
import { getCourses } from '@/services'
import { ERROR_CODES } from '@/utils'
import useSWR from 'swr'

function CourseCardList() {
  const { data: courses, error, isLoading } = useSWR('courses', getCourses, { revalidateOnFocus: false })

  if (error) return <div className='card-list-error'>{ERROR_CODES[error.response.status]}</div>
  if (isLoading) return <CourseCardListSkeleton quantity={3} />

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

'use client'
import { DndCard, TeacherCard, TeacherCardListSkeleton } from '@/components'
import { CourseName } from '@/models'
import { getTeachersByCourseId } from '@/services'
import { ERROR_CODES } from '@/utils'
import useSWR from 'swr'

interface Props {
  courseID: string
  courseName: CourseName
}

function TeacherCardList({ courseID, courseName }: Props) {
  const { data: teachers, error, isLoading } = useSWR(courseID, getTeachersByCourseId, { revalidateOnFocus: false })

  if (error) return <div className='card-list-error'>{ERROR_CODES[error.response.status]}</div>
  if (isLoading) return <TeacherCardListSkeleton quantity={3} />

  return (
    <ul className='card-list'>
      {teachers?.map((teacher) => (
        <li key={teacher.id}>
          <TeacherCard teacher={teacher} courseName={courseName} courseID={courseID} />
        </li>
      ))}
      <li>
        <DndCard courseID={courseID} courseName={courseName} />
      </li>
    </ul>
  )
}

export default TeacherCardList

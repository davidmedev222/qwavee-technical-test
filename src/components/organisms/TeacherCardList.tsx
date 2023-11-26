'use client'
import { DndCard, TeacherCard } from '@/components'
import { CourseName } from '@/models'
import { getTeachersByCourseId } from '@/services'
import useSWR from 'swr'

interface Props {
  courseID: string
  courseName: CourseName
}

function TeacherCardList({ courseID, courseName }: Props) {
  const { data: teachers, error, isLoading } = useSWR(courseID, getTeachersByCourseId, { revalidateOnFocus: false })

  if (error) return <div>ERROR LIST TEACHERS</div>
  if (isLoading) return <div>SKELETON LIST TEACHERS</div>

  return (
    <ul className='card-list'>
      {teachers?.map((teacher) => (
        <li key={teacher.id}>
          <TeacherCard teacher={teacher} courseName={courseName} />
        </li>
      ))}
      <li>
        <DndCard />
      </li>
    </ul>
  )
}

export default TeacherCardList

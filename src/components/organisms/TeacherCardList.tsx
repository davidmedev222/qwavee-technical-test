import { DndCard, TeacherCard } from '@/components'
import { CourseName } from '@/models'
import { getTeachersByCourseId } from '@/services'

interface Props {
  courseID: string
  courseName: CourseName
}

async function TeacherCardList({ courseID, courseName }: Props) {
  const teachers = await getTeachersByCourseId(courseID)

  return (
    <ul className='card-list'>
      {teachers.map((teacher) => (
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

import { Avatar } from '@/components'
import { CourseName, Teacher } from '@/models'

interface Props {
  teacher: Teacher
  courseName: CourseName
}

function TeacherCard({ teacher, courseName }: Props) {
  return (
    <article className='teacher-card'>
      <Avatar src={teacher.avatar} />
      <header className='teacher-card-header'>
        <h2 className='teacher-card-title'>
          {teacher.name} {teacher.lastName}
        </h2>
        <span className='teacher-card-subtitle'>{courseName}</span>
      </header>
    </article>
  )
}

export default TeacherCard

import { CourseCardList, TeacherCardList } from '@/components'

function Section() {
  return (
    <section className='section'>
      <h1 className='section-title'>Qwavee Technical Test</h1>
      <TeacherCardList courseID='4' courseName='none' />
      <CourseCardList />
    </section>
  )
}

export default Section

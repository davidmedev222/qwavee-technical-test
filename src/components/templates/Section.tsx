import { CourseCardList, TeacherCardList } from '@/components'

function Section() {
  return (
    <section className='section'>
      <h1 className='section-title'>Qwavee Technical Test</h1>
      <TeacherCardList />
      <CourseCardList />
    </section>
  )
}

export default Section

import { Avatar } from '@/components'

function TeacherCard() {
  return (
    <article className='teacher-card'>
      <Avatar src='https://static.wixstatic.com/media/bdcc48_17879e364d1f422d8c6408bf6fd1391e~mv2.jpg/v1/crop/x_0,y_108,w_991,h_991/fill/w_300,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Profile-DanielEguiluz.jpg' />
      <header className='teacher-card-header'>
        <h2 className='teacher-card-title'>Mariela Mch.</h2>
        <span className='teacher-card-subtitle'>None</span>
      </header>
    </article>
  )
}

export default TeacherCard

import { Teacher } from '@/models'
import { instance } from '@/services'

async function getTeachersByCourseId(courseID: string): Promise<Teacher[]> {
  const url = `/subject/${courseID}/teachers`
  const request = await instance.get(url)
  return request.data
}

async function putTeacherCourse(courseID: string, teacher: Teacher): Promise<Teacher> {
  const url = `/subject/${courseID}/teachers/${teacher.id}`
  const request = await instance.put(url, { ...teacher, subjectId: courseID })
  return request.data
}

export { getTeachersByCourseId, putTeacherCourse }

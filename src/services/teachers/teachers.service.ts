import { Teacher } from '@/models'
import { instance } from '@/services'

async function getTeachersByCourseId(courseID: string): Promise<Teacher[]> {
  try {
    const url = `/subject/${courseID}/teachers`
    const request = await instance.get(url)
    return request.data
  } catch (error) {
    throw new Error('Error to get teachers by course.')
  }
}

export { getTeachersByCourseId }

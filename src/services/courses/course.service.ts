import { Course } from '@/models'
import { instance } from '@/services'

async function getCourses(): Promise<Course[]> {
  const url = '/subject'
  const request = await instance.get(url)
  return request.data
}

export { getCourses }

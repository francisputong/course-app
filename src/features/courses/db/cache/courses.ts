import { revalidateTag } from 'next/cache';

import { getGlobalTag, getIdTag } from '@/lib/data-cache';

export function getCourseGlobalTag() {
  return getGlobalTag('courses');
}

export function getCourseIdTag(id: string) {
  return getIdTag('courses', id);
}

export function revalidateCourseCache(id: string) {
  revalidateTag(getCourseGlobalTag());
  revalidateTag(getCourseIdTag(id));
}

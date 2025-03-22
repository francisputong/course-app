import { PageHeader } from '@/components/ui/page-header';
import { CourseForm } from '@/features/courses/components/course-form';

export default function NewCoursePage() {
  return (
    <div className="container my-6">
      <PageHeader title="New Course" />
      <CourseForm />
    </div>
  );
}

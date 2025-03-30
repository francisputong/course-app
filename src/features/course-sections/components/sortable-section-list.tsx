'use client';

import { EyeClosed, Trash2Icon } from 'lucide-react';

import { deleteSection, updateSectionOrders } from '../actions/sections';

import { SectionFormDialog } from './section-form-dialog';

import { ActionButton } from '@/components/action-button';
import { SortableItem, SortableList } from '@/components/sortable-list';
import { Button } from '@/components/ui/button';
import { DialogTrigger } from '@/components/ui/dialog';
import { CourseSectionStatus } from '@/drizzle/schema';
import { cn } from '@/lib/utils';

export function SortableSectionList({
  courseId,
  sections,
}: {
  courseId: string;
  sections: {
    id: string;
    name: string;
    status: CourseSectionStatus;
  }[];
}) {
  return (
    <SortableList items={sections} onOrderChange={updateSectionOrders}>
      {(items) =>
        items.map((section) => (
          <SortableItem
            key={section.id}
            id={section.id}
            className="flex items-center gap-1"
          >
            <div
              className={cn(
                'contents',
                section.status === 'private' && 'text-muted-foreground',
              )}
            >
              {section.status === 'private' && <EyeClosed className="size-4" />}
              {section.name}
            </div>
            <SectionFormDialog section={section} courseId={courseId}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="ml-auto">
                  Edit
                </Button>
              </DialogTrigger>
            </SectionFormDialog>
            <ActionButton
              action={deleteSection.bind(null, section.id)}
              requireAreYouSure
              variant="destructiveOutline"
              size="sm"
            >
              <Trash2Icon />
              <span className="sr-only">Delete</span>
            </ActionButton>
          </SortableItem>
        ))
      }
    </SortableList>
  );
}

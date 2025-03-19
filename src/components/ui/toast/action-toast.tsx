import { toast, ExternalToast } from 'sonner';

interface ActionData {
  error: boolean;
  message: string;
}

interface ActionToastProps extends Omit<ExternalToast, 'description' | 'type'> {
  actionData: ActionData;
}

function actionToast({ actionData, ...props }: ActionToastProps) {
  if (actionData.error) {
    toast.error('Error', {
      description: actionData.error,
      ...props,
    });
  } else {
    toast.success('Success', {
      description: actionData.message,
      ...props,
    });
  }
}

export { actionToast };

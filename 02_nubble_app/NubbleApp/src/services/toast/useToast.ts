import { ToastService } from './toastTypes'
import { useToastServiceZustand, useToastZustand } from './useToastZustand'

export function useToast(): ToastService['toast'] {
  return useToastZustand()
}

export function useToastService(): Pick<
  ToastService,
  'showToast' | 'hideToast'
> {
  return useToastServiceZustand()
}

// return from context
// export function useToast(): ToastService['toast'] {
//   const { toast } = useToastContext()
//   return toast
// }

// export function useToastService(): Pick<
//   ToastService,
//   'showToast' | 'hideToast'
// > {
//   const { showToast, hideToast } = useToastContext()
//   return { showToast, hideToast }
// }
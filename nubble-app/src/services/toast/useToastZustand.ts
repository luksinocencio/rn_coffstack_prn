import { create } from 'zustand'

import { ToastService } from './toastTypes'

const useToastStoare = create<ToastService>(set => ({
  toast: null,
  showToast: toast => set({ toast }),
  hideToast: () => set({ toast: null }),
}))

export function useToastZustand(): ToastService['toast'] {
  return useToastStoare(state => state.toast)
}

export function useToastServiceZustand(): Pick<
  ToastService,
  'showToast' | 'hideToast'
> {
  const showToast = useToastStoare(state => state.showToast)
  const hideToast = useToastStoare(state => state.hideToast)

  return { showToast, hideToast }
}

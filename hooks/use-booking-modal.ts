import { create } from "zustand"

interface BookingModalStore {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

export const useBookingModal = create<BookingModalStore>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}))

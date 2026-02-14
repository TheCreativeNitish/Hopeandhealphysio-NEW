"use client"

import { createContext, useContext, useState, ReactNode } from "react"

interface AppointmentModalContextType {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const AppointmentModalContext = createContext<AppointmentModalContextType | undefined>(undefined)

export function AppointmentModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <AppointmentModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </AppointmentModalContext.Provider>
  )
}

export function useAppointmentModal() {
  const context = useContext(AppointmentModalContext)
  if (!context) {
    throw new Error("useAppointmentModal must be used within AppointmentModalProvider")
  }
  return context
}

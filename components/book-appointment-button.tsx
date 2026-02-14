"use client"

import { useAppointmentModal } from "@/contexts/appointment-modal-context"

interface BookAppointmentButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  className?: string
  children?: React.ReactNode
  onClick?: () => void
}

export function BookAppointmentButton({
  variant = "primary",
  size = "md",
  className = "",
  children = "Book Appointment",
  onClick,
}: BookAppointmentButtonProps) {
  const { openModal } = useAppointmentModal()


  const baseStyles = "inline-flex items-center justify-center gap-2 font-bold rounded-full transition-all"

  const variantStyles = {
    primary: "bg-secondary text-white shadow-lg hover:shadow-xl hover:scale-105",
    secondary: "bg-primary text-white shadow-lg hover:shadow-xl hover:scale-105",
    outline: "border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20",
    ghost: "text-primary hover:text-primary/80",
  }

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  const handleClick = () => {
    openModal()
    onClick?.()
  }

  return (
    <button
      onClick={handleClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  )
}

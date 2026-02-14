"use client"

import { X, ArrowRight } from "lucide-react"

interface Service {
    image: string
    icon: string
    title: string
    description: string
    detailedDescription: string
}

interface ServiceDetailModalProps {
    isOpen: boolean
    onClose: () => void
    service: Service | null
}

export function ServiceDetailModal({ isOpen, onClose, service }: ServiceDetailModalProps) {
    if (!isOpen || !service) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-2xl bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-200">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
                >
                    <X className="h-6 w-6" />
                </button>

                <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
                    {/* Image Section */}
                    <div className="w-full md:w-2/5 relative h-48 md:h-auto">
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/50 via-transparent to-transparent" />

                        {/* Icon */}
                        <div className="absolute bottom-4 left-4 md:top-6 md:left-6 w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center text-3xl">
                            {service.icon}
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-3/5 p-6 md:p-8 overflow-y-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                            {service.title}
                        </h2>
                        <div className="w-20 h-1.5 bg-primary/80 rounded-full mb-6" />

                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            {service.detailedDescription.split('\n\n').map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            ))}
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
                            <button
                                onClick={onClose}
                                className="px-6 py-2.5 rounded-lg bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, Users, Clock, CheckCircle2, Search, Loader2, AlertCircle, RefreshCcw, Lock, Eye, EyeOff, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AppointmentData {
    timestamp: string
    fullName: string
    phone: string | number
    email: string
    appointmentDate: string
    timeSlot: string
    reason: string
}

interface DashboardStats {
    todayCount: number
    totalCount: number
    pendingCount: number
}

export default function AdminDashboard() {
    // Auth State
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [loginError, setLoginError] = useState("")

    // Dashboard State
    const [appointments, setAppointments] = useState<AppointmentData[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [stats, setStats] = useState<DashboardStats>({ todayCount: 0, totalCount: 0, pendingCount: 0 })
    const [searchTerm, setSearchTerm] = useState("")
    const [filterType, setFilterType] = useState<'all' | 'today'>('all')
    const [selectedReason, setSelectedReason] = useState<string | null>(null)
    const [copiedText, setCopiedText] = useState<string | null>(null)

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        if (username === "admin" && password === "admin123") {
            setIsAuthenticated(true)
            setLoginError("")
            fetchAppointments()
        } else {
            setLoginError("Invalid credentials. Please try again.")
        }
    }

    const parseDate = (dateString: string): Date | null => {
        if (!dateString) return null
        const date = new Date(dateString)
        if (!isNaN(date.getTime())) return date
        // Try parsing "DD/MM/YYYY HH:mm:ss" format (common in Google Sheets)
        const parts = dateString.match(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})\s*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?/)
        if (parts) {
            const day = parseInt(parts[1], 10)
            const month = parseInt(parts[2], 10) - 1
            const year = parseInt(parts[3], 10)
            const hour = parts[4] ? parseInt(parts[4], 10) : 0
            const minute = parts[5] ? parseInt(parts[5], 10) : 0
            const second = parts[6] ? parseInt(parts[6], 10) : 0
            return new Date(year, month, day, hour, minute, second)
        }
        return null
    }

    const fetchAppointments = async () => {
        setLoading(true)
        setError("")
        try {
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbzTEJrBSktGVt66fU32QXx9Oi3tgOrjg4rQbsImUI70pcOu41Qby2h-1FzAhl87zbkFJQ/exec"
            )
            if (!response.ok) throw new Error("Failed to fetch data")
            const result = await response.json()
            if (result.status === "success" && Array.isArray(result.data)) {
                const sortedData = result.data.sort((a: AppointmentData, b: AppointmentData) => {
                    const dateA = parseDate(a.timestamp)
                    const dateB = parseDate(b.timestamp)
                    return (dateB ? dateB.getTime() : 0) - (dateA ? dateA.getTime() : 0)
                })
                setAppointments(sortedData)
                calculateStats(sortedData)
            } else {
                throw new Error("Invalid data format received")
            }
        } catch (err) {
            console.error("Error fetching appointments:", err)
            setError("Failed to load appointments. Please check your internet connection.")
        } finally {
            setLoading(false)
        }
    }

    const calculateStats = (data: AppointmentData[]) => {
        const today = new Date()
        const todayCount = data.filter(apt => {
            const aptDate = parseDate(apt.timestamp)
            if (!aptDate) return false
            return (
                aptDate.getDate() === today.getDate() &&
                aptDate.getMonth() === today.getMonth() &&
                aptDate.getFullYear() === today.getFullYear()
            )
        }).length
        setStats({ todayCount, totalCount: data.length, pendingCount: data.length })
    }

    const filteredAppointments = appointments.filter(apt => {
        const matchesSearch = apt.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            String(apt.phone).includes(searchTerm)
        if (filterType === 'today') {
            const today = new Date()
            const aptDate = parseDate(apt.timestamp)
            if (!aptDate) return false
            return matchesSearch && (
                aptDate.getDate() === today.getDate() &&
                aptDate.getMonth() === today.getMonth() &&
                aptDate.getFullYear() === today.getFullYear()
            )
        }
        return matchesSearch
    })

    const formatDate = (dateString: string) => {
        const date = parseDate(dateString)
        if (!date) return dateString
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    }

    const formatTime = (dateString: string) => {
        const date = parseDate(dateString)
        if (!date) return ""
        return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
    }

    const statCards = [
        {
            label: "Today's Requests",
            value: stats.todayCount.toString(),
            icon: Calendar,
            color: "bg-blue-50 text-blue-600",
            filter: 'today' as const,
            isActive: filterType === 'today'
        },
        {
            label: "Total Patients",
            value: stats.totalCount.toString(),
            icon: Users,
            color: "bg-teal-50 text-teal-600",
            filter: 'all' as const,
            isActive: filterType === 'all'
        },
        {
            label: "Total Requests",
            value: stats.pendingCount.toString(),
            icon: Clock,
            color: "bg-orange-50 text-orange-600",
            filter: 'all' as const,
            isActive: false
        },
    ]

    // LOGIN SCREEN
    const handleCopy = (text: string) => {
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text).then(() => {
                setCopiedText(text)
                setTimeout(() => setCopiedText(null), 2000)
            })
        } else {
            // Fallback for non-secure contexts
            const textArea = document.createElement("textarea")
            textArea.value = text
            textArea.style.position = "fixed"
            textArea.style.left = "-9999px"
            textArea.style.top = "0"
            document.body.appendChild(textArea)
            textArea.focus()
            textArea.select()
            try {
                document.execCommand("copy")
                setCopiedText(text)
                setTimeout(() => setCopiedText(null), 2000)
            } catch (err) {
                console.error("Fallback: Oops, unable to copy", err)
            }
            document.body.removeChild(textArea)
        }
    }

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-teal-900">Hope and Heal</h1>
                    <p className="text-teal-600/80 font-medium">Doctor's Portal</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
                    <div className="flex justify-center mb-6">
                        <div className="h-16 w-16 bg-teal-50 rounded-full flex items-center justify-center">
                            <Lock className="h-8 w-8 text-teal-600" />
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-center text-slate-900 mb-6">Admin Login</h2>
                    <form onSubmit={handleLogin} className="space-y-4">
                        {loginError && (
                            <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm flex items-center gap-2">
                                <AlertCircle className="h-4 w-4" />
                                {loginError}
                            </div>
                        )}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Username</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all font-medium"
                                placeholder="Enter your ID"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all font-medium pr-10"
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                            </div>
                        </div>
                        <Button
                            type="submit"
                            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 text-lg rounded-xl shadow-lg shadow-teal-600/20 hover:shadow-teal-600/40 transition-all mt-4"
                        >
                            Access Dashboard
                        </Button>
                    </form>
                    <div className="mt-6 text-center">
                        <a href="/" className="text-sm text-slate-400 hover:text-slate-600 transition-colors">
                            ← Back to Website
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    // DASHBOARD
    return (
        <>
            <div className="min-h-screen flex flex-col bg-gray-50">
                <Header />
                <main className="flex-1 py-8">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                        {/* Dashboard Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                            <div>
                                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Doctor's Dashboard</h1>
                                <p className="text-slate-500">Welcome back, Dr. Neha Sharma</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={fetchAppointments}
                                    disabled={loading}
                                    className="p-2 text-teal-600 hover:bg-teal-50 rounded-lg transition-colors disabled:opacity-50"
                                    title="Refresh Data"
                                >
                                    <RefreshCcw className={`h-5 w-5 ${loading ? "animate-spin" : ""}`} />
                                </button>
                                <p className="text-sm font-semibold text-teal-600 bg-teal-50 px-4 py-2 rounded-lg inline-block">
                                    {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                                </p>
                                <button
                                    onClick={() => setIsAuthenticated(false)}
                                    className="ml-2 text-sm text-red-500 hover:text-red-700 font-semibold px-3 py-2 hover:bg-red-50 rounded-lg transition-colors border border-transparent hover:border-red-100"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                            {statCards.map((stat, index) => (
                                <div
                                    key={index}
                                    onClick={() => setFilterType(stat.filter)}
                                    className={`bg-white p-6 rounded-2xl shadow-sm border transition-all cursor-pointer hover:shadow-md ${stat.isActive ? 'border-teal-500 ring-2 ring-teal-500/20' : 'border-gray-100'} flex items-center gap-4`}
                                >
                                    <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${stat.color}`}>
                                        <stat.icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                                        <p className="text-2xl font-bold text-slate-900">{loading ? "..." : stat.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Appointments Table Section */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <h2 className="text-lg font-bold text-slate-900">
                                    {filterType === 'today' ? "Today's Appointments" : "All Appointment Bookings"}
                                </h2>
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search patient or phone..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 w-full sm:w-64"
                                    />
                                </div>
                            </div>

                            {loading ? (
                                <div className="p-12 flex flex-col items-center justify-center text-slate-400">
                                    <Loader2 className="h-8 w-8 animate-spin mb-3 text-teal-500" />
                                    <p>Loading appointments...</p>
                                </div>
                            ) : error ? (
                                <div className="p-12 flex flex-col items-center justify-center text-red-500">
                                    <AlertCircle className="h-8 w-8 mb-3" />
                                    <p>{error}</p>
                                    <button onClick={fetchAppointments} className="mt-4 text-sm font-semibold text-teal-600 hover:underline">
                                        Try Again
                                    </button>
                                </div>
                            ) : filteredAppointments.length === 0 ? (
                                <div className="p-12 text-center text-slate-400">
                                    <p>No appointments found.</p>
                                </div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm text-left">
                                        <thead className="bg-gray-50 text-slate-500 font-semibold uppercase text-xs">
                                            <tr>
                                                <th className="px-6 py-4">Received On</th>
                                                <th className="px-6 py-4">Patient Name</th>
                                                <th className="px-6 py-4">Service / Additional Message</th>
                                                <th className="px-6 py-4">Phone</th>
                                                <th className="px-6 py-4">Email</th>
                                                <th className="px-6 py-4 text-right">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {filteredAppointments.map((apt, idx) => (
                                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                    <td className="px-6 py-4 font-medium text-slate-900">
                                                        {formatDate(apt.timestamp)}
                                                        <span className="block text-xs text-slate-400 font-normal">
                                                            {formatTime(apt.timestamp)}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 flex items-center gap-3">
                                                        <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold text-xs shrink-0">
                                                            {apt.fullName.charAt(0).toUpperCase()}
                                                        </div>
                                                        <span className="truncate max-w-[150px]">{apt.fullName}</span>
                                                    </td>
                                                    <td
                                                        className="px-6 py-4 text-slate-600 max-w-[200px] cursor-pointer group"
                                                        onClick={() => setSelectedReason(apt.reason)}
                                                    >
                                                        <span className="block truncate group-hover:text-teal-600 transition-colors">{apt.reason}</span>
                                                        {apt.reason && apt.reason.length > 25 && (
                                                            <span className="text-xs text-teal-400 font-medium mt-0.5 block">Click to read more ↗</span>
                                                        )}
                                                    </td>
                                                    <td className="px-6 py-4 text-slate-600">
                                                        <div className="flex items-center gap-2">
                                                            <a href={`tel:${apt.phone}`} className="hover:text-teal-600 font-medium block">
                                                                {apt.phone}
                                                            </a>
                                                            <button
                                                                onClick={() => handleCopy(String(apt.phone))}
                                                                className="p-1.5 hover:bg-slate-100 rounded-md transition-colors text-slate-400 hover:text-teal-600"
                                                                title="Copy phone number"
                                                            >
                                                                {copiedText === String(apt.phone) ? (
                                                                    <Check className="h-3.5 w-3.5" />
                                                                ) : (
                                                                    <Copy className="h-3.5 w-3.5" />
                                                                )}
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 text-slate-600">
                                                        <div className="flex items-center gap-2">
                                                            <a href={`mailto:${apt.email}`} className="text-xs hover:text-teal-600 block truncate max-w-[150px]" title={apt.email}>
                                                                {apt.email}
                                                            </a>
                                                            <button
                                                                onClick={() => handleCopy(apt.email)}
                                                                className="p-1.5 hover:bg-slate-100 rounded-md transition-colors text-slate-400 hover:text-teal-600 shrink-0"
                                                                title="Copy email"
                                                            >
                                                                {copiedText === apt.email ? (
                                                                    <Check className="h-3.5 w-3.5" />
                                                                ) : (
                                                                    <Copy className="h-3.5 w-3.5" />
                                                                )}
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 text-right">
                                                        <a
                                                            href={`https://wa.me/${apt.phone}`}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="text-green-600 hover:text-green-700 font-medium transition-colors text-xs border border-green-200 bg-green-50 px-3 py-1.5 rounded-md"
                                                        >
                                                            WhatsApp
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>
                </main>
                <Footer />
            </div>

            {/* Reason Detail Popup */}
            {selectedReason !== null && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
                    onClick={() => setSelectedReason(null)}
                >
                    <div
                        className="bg-white rounded-2xl shadow-2xl w-full max-w-md border border-gray-100"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100">
                            <h3 className="text-base font-bold text-slate-900">Service / Additional Message</h3>
                            <button
                                onClick={() => setSelectedReason(null)}
                                className="h-8 w-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors text-lg font-medium"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="px-6 py-5">
                            <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-wrap">
                                {selectedReason || <span className="text-slate-400 italic">No reason provided.</span>}
                            </p>
                        </div>
                        <div className="px-6 pb-6">
                            <button
                                onClick={() => setSelectedReason(null)}
                                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2.5 rounded-xl transition-colors text-sm"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

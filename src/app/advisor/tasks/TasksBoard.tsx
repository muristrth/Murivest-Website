'use client'

import { useState, useTransition } from 'react'
import { ListChecks } from 'lucide-react'

type TaskStatus = 'todo' | 'in_progress' | 'done'

interface Task {
  id: string
  title: string
  description: string | null
  status: TaskStatus
  priority: 'low' | 'medium' | 'high' | 'urgent'
  due_date: string | null
}

const columns: { key: TaskStatus; label: string }[] = [
  { key: 'todo', label: 'To Do' },
  { key: 'in_progress', label: 'In Progress' },
  { key: 'done', label: 'Done' },
]

const priorityStyles: Record<string, string> = {
  low: 'bg-[#1B4332]/5 text-[#1B4332]/60',
  medium: 'bg-blue-50 text-blue-700',
  high: 'bg-amber-50 text-amber-700',
  urgent: 'bg-red-50 text-red-700',
}

export default function TasksBoard({ initialTasks }: { initialTasks: Task[] }) {
  const [tasks, setTasks] = useState(initialTasks)
  const [isPending, startTransition] = useTransition()

  function updateStatus(id: string, status: TaskStatus) {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, status } : t)))
    startTransition(async () => {
      const res = await fetch(`/api/advisor/tasks/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      })
      if (!res.ok) {
        // revert on failure
        setTasks(initialTasks)
      }
    })
  }

  if (tasks.length === 0) {
    return (
      <div className="bg-white border border-[#1B4332]/10 p-12 text-center">
        <ListChecks className="h-10 w-10 text-[#1B4332]/20 mx-auto mb-4" />
        <p className="text-sm text-[#2C3E35]/60">No tasks yet.</p>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {columns.map((col) => {
        const colTasks = tasks.filter((t) => t.status === col.key)
        return (
          <div key={col.key} className="bg-white border border-[#1B4332]/10">
            <div className="px-4 py-3 border-b border-[#1B4332]/10 flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.15em] text-[#1B4332]/70">{col.label}</span>
              <span className="text-xs text-[#1B4332]/40">{colTasks.length}</span>
            </div>
            <div className="p-3 space-y-3 min-h-[120px]">
              {colTasks.map((task) => (
                <div key={task.id} className="border border-[#1B4332]/10 p-3">
                  <p className="text-sm font-medium text-[#1B4332]">{task.title}</p>
                  {task.description && <p className="text-xs text-[#2C3E35]/60 mt-1">{task.description}</p>}
                  <div className="flex items-center justify-between mt-3">
                    <span className={`text-[9px] uppercase tracking-wider px-2 py-1 ${priorityStyles[task.priority]}`}>
                      {task.priority}
                    </span>
                    {task.due_date && (
                      <span className="text-[10px] text-[#2C3E35]/50">
                        {new Date(task.due_date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}
                      </span>
                    )}
                  </div>
                  <select
                    value={task.status}
                    disabled={isPending}
                    onChange={(e) => updateStatus(task.id, e.target.value as TaskStatus)}
                    className="mt-3 w-full text-[10px] uppercase tracking-wider border border-[#1B4332]/15 px-2 py-1.5 bg-[#FAF9F6] text-[#1B4332]"
                  >
                    <option value="todo">To Do</option>
                    <option value="in_progress">In Progress</option>
                    <option value="done">Done</option>
                  </select>
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

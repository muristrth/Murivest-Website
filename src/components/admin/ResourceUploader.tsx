'use client'

import React, { useState, useRef } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { Alert } from '@/components/ui/Alert'
import { Loader } from '@/components/ui/Loader'

interface ResourceUploaderProps {
  onUpload: (file: File, data: UploadData) => Promise<string>
}

interface UploadData {
  title: string
  type: string
  description?: string
}

export function ResourceUploader({ onUpload }: ResourceUploaderProps) {
  const [file, setFile] = useState<File | null>(null)
  const [title, setTitle] = useState('')
  const [type, setType] = useState('document')
  const [description, setDescription] = useState('')
  const [isUploading, setIsUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const typeOptions = [
    { value: 'document', label: 'Document (PDF, DOC, etc.)' },
    { value: 'image', label: 'Image (JPG, PNG, etc.)' },
    { value: 'video', label: 'Video' },
    { value: 'spreadsheet', label: 'Spreadsheet (XLS, CSV)' }
  ]

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      // Auto-fill title from filename if empty
      if (!title) {
        setTitle(selectedFile.name.replace(/\.[^/.]+$/, ''))
      }
      setError(null)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const droppedFile = e.dataTransfer.files?.[0]
    if (droppedFile) {
      setFile(droppedFile)
      if (!title) {
        setTitle(droppedFile.name.replace(/\.[^/.]+$/, ''))
      }
    }
  }

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file')
      return
    }

    if (!title.trim()) {
      setError('Please provide a title')
      return
    }

    setIsUploading(true)
    setError(null)
    setSuccess(null)

    try {
      // Simulate progress for larger files
      const progressInterval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 10, 90))
      }, 200)

      const url = await onUpload(file, {
        title,
        type,
        description
      })

      clearInterval(progressInterval)
      setProgress(100)

      setSuccess(`File uploaded successfully! URL: ${url}`)

      // Reset form
      setFile(null)
      setTitle('')
      setDescription('')
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed')
    } finally {
      setIsUploading(false)
      setTimeout(() => setProgress(0), 1000)
    }
  }

  return (
    <div className="space-y-6">
      {error && <Alert variant="error">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}

      {/* File Drop Zone */}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className={`
          border-2 border-dashed rounded-lg p-8 text-center transition-colors
          ${file ? 'border-emerald-500 bg-emerald-50' : 'border-slate-300 hover:border-emerald-400'}
        `}
      >
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileChange}
          className="hidden"
          id="file-upload"
        />
        
        {file ? (
          <div className="flex items-center justify-center gap-3">
            <svg className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="text-left">
              <p className="font-medium text-slate-900">{file.name}</p>
              <p className="text-sm text-slate-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
            <button
              type="button"
              onClick={() => {
                setFile(null)
                if (fileInputRef.current) fileInputRef.current.value = ''
              }}
              className="ml-4 text-slate-400 hover:text-red-500"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        ) : (
          <>
            <label htmlFor="file-upload" className="cursor-pointer">
              <svg className="mx-auto h-12 w-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p className="mt-2 text-sm text-slate-600">
                <span className="font-medium text-emerald-600">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-slate-400 mt-1">
                PDF, DOC, XLS, JPG, PNG up to 50MB
              </p>
            </label>
          </>
        )}
      </div>

      {/* Upload Progress */}
      {isUploading && progress > 0 && (
        <div className="space-y-2">
          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-slate-500 text-center">{progress}% uploaded</p>
        </div>
      )}

      {/* Form Fields */}
      <div className="space-y-4">
        <Input
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Resource title"
          required
        />

        <Select
          label="Resource Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          options={typeOptions}
        />

        <Input
          label="Description (Optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Brief description"
        />
      </div>

      {/* Upload Button */}
      <Button
        onClick={handleUpload}
        isLoading={isUploading}
        disabled={!file || !title.trim()}
        className="w-full"
      >
        {isUploading ? 'Uploading...' : 'Upload Resource'}
      </Button>
    </div>
  )
}
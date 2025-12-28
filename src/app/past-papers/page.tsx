'use client'

import { useState, useEffect, useMemo, useCallback } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { PastPaper } from '@/types'
import { PAST_PAPERS_SCHOOLS, generateDemoPastPapers } from '@/lib/constants'
import CompactHeader from '@/components/shared/CompactHeader'
import SchoolTabs from './components/SchoolTabs'
import YearSelector from './components/YearSelector'
import SearchBar from './components/SearchBar'
import PaperList from './components/PaperList'
import PreviewModal from './components/PreviewModal'
import EmptyState from './components/EmptyState'
import LoadingState from './components/LoadingState'

export default function PastPapersPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  // Get school from URL params, default to first school
  const schoolFromUrl = searchParams.get('school')
  const initialSchool = PAST_PAPERS_SCHOOLS.find(s => s.id === schoolFromUrl)?.id || PAST_PAPERS_SCHOOLS[0].id
  
  // State
  const [activeSchool, setActiveSchool] = useState<string>(initialSchool)
  const [selectedYear, setSelectedYear] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [examFilter, setExamFilter] = useState<'all' | 'main' | 'supplementary' | 'cat'>('all')
  const [semesterFilter, setSemesterFilter] = useState<'all' | 'first' | 'second'>('all')
  const [papers, setPapers] = useState<PastPaper[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [previewPaper, setPreviewPaper] = useState<PastPaper | null>(null)
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  
  useEffect(() => {
    if (schoolFromUrl) {
      const school = PAST_PAPERS_SCHOOLS.find(s => s.id === schoolFromUrl)
      if (school) {
        setActiveSchool(school.id)
      }
    }
  }, [schoolFromUrl])

  // Get current school data
  const currentSchool = useMemo(() => {
    return PAST_PAPERS_SCHOOLS.find(s => s.id === activeSchool) || PAST_PAPERS_SCHOOLS[0]
  }, [activeSchool])

  // Load papers when school or year changes
  useEffect(() => {
    if (!selectedYear) {
      setPapers([])
      return
    }

    setIsLoading(true)
    
    // Simulate API call delay
    const timer = setTimeout(() => {
      const demoPapers = generateDemoPastPapers(
        currentSchool.name,
        currentSchool.abbreviation,
        selectedYear
      )
      setPapers(demoPapers)
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [activeSchool, selectedYear, currentSchool])

  // Filter papers based on search and filters
  const filteredPapers = useMemo(() => {
    let filtered = papers

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(paper => 
        paper.courseCode.toLowerCase().includes(query) ||
        paper.courseName.toLowerCase().includes(query) ||
        paper.title.toLowerCase().includes(query)
      )
    }

    // Exam type filter
    if (examFilter !== 'all') {
      filtered = filtered.filter(paper => paper.examType === examFilter)
    }

    // Semester filter
    if (semesterFilter !== 'all') {
      filtered = filtered.filter(paper => paper.semester === semesterFilter)
    }

    return filtered
  }, [papers, searchQuery, examFilter, semesterFilter])

  // Handlers
  const handleSchoolChange = useCallback((schoolId: string) => {
    setActiveSchool(schoolId)
    setSelectedYear(null)
    setSearchQuery('')
    setExamFilter('all')
    setSemesterFilter('all')
    
    router.push(`/past-papers?school=${schoolId}`, { scroll: false })
  }, [router])

  const handleYearChange = useCallback((year: number) => {
    setSelectedYear(year)
    setSearchQuery('')
    setExamFilter('all')
    setSemesterFilter('all')
  }, [])

  const handlePreview = useCallback((paper: PastPaper) => {
    setPreviewPaper(paper)
    setIsPreviewOpen(true)
  }, [])

  const handleClosePreview = useCallback(() => {
    setIsPreviewOpen(false)
    setPreviewPaper(null)
  }, [])

  const handleDownload = useCallback((paper: PastPaper) => {
    
    console.log('Downloading:', paper.fileUrl)
  
    const link = document.createElement('a')
    link.href = paper.fileUrl
    link.download = `${paper.courseCode}-${paper.year}-${paper.semester}-${paper.examType}.pdf`
    link.click()
  }, [])

  const handleUploadToAI = useCallback((paper: PastPaper) => {
    // Navigate to chatbot with paper context
    router.push(`/chatbot?paper=${encodeURIComponent(paper.id)}`)
  }, [router])

  return (
    <div className="min-h-screen bg-dark flex flex-col">
      {/* Navigation Header */}
      <CompactHeader />
      
      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-[1400px] mx-auto px-4 md:px-[5%] py-8">
          {/* Page Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Browse <span className="text-primary">Past Papers</span>
            </h1>
            <p className="text-text-gray text-lg max-w-2xl mx-auto">
              Access over 25,000 past examination papers. Search, preview, download, 
              or upload to AI for instant help.
            </p>
          </div>

          {/* School Tabs */}
          <SchoolTabs
            schools={PAST_PAPERS_SCHOOLS as unknown as Array<{id: string; name: string; abbreviation: string; years: number[]}>}
            activeSchool={activeSchool}
            onSchoolChange={handleSchoolChange}
          />

          {/* School Info Card */}
          <div className="bg-dark-card border border-dark-lighter rounded-xl p-4 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-white">
                  {currentSchool.name}
                </h2>
                <p className="text-text-gray text-sm">
                  {currentSchool.abbreviation} • {currentSchool.years.length} years of past papers available
                </p>
              </div>
              <div className="text-sm text-text-gray">
                Years: <span className="text-primary">{currentSchool.years[currentSchool.years.length - 1]}</span> - <span className="text-primary">{currentSchool.years[0]}</span>
              </div>
            </div>
          </div>

          {/* Year Selector */}
          <YearSelector
            years={[...currentSchool.years]}
            selectedYear={selectedYear}
            schoolAbbreviation={currentSchool.abbreviation}
            onYearChange={handleYearChange}
          />

          {/* Show content only when year is selected */}
          {selectedYear ? (
            <>
              {/* Search Bar */}
              <SearchBar
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                resultsCount={filteredPapers.length}
              />

              

              {/* Papers List */}
              {isLoading ? (
                <LoadingState />
              ) : (
                <PaperList
                  papers={filteredPapers}
                  onPreview={handlePreview}
                  onDownload={handleDownload}
                  onUploadToAI={handleUploadToAI}
                />
              )}
            </>
          ) : (
            <EmptyState 
              schoolName={currentSchool.name}
              hasSelectedYear={false}
            />
          )}
        </div>
      </main>

      {/* Preview Modal */}
      <PreviewModal
        paper={previewPaper}
        isOpen={isPreviewOpen}
        onClose={handleClosePreview}
        onDownload={handleDownload}
        onUploadToAI={handleUploadToAI}
      />
    </div>
  )
}

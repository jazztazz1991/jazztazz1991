import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Education from './Education'

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
  },
}))

vi.mock('./SectionHeader', () => ({
  default: ({ label, title }) => (
    <div>
      <span>{label}</span>
      <h2>{title}</h2>
    </div>
  ),
}))

describe('Education', () => {
  it('renders the section header', () => {
    render(<Education />)
    expect(screen.getByText('Credentials')).toBeInTheDocument()
    expect(screen.getByText('Education')).toBeInTheDocument()
  })

  it('renders Valencia College entry', () => {
    render(<Education />)
    expect(screen.getByText('Valencia College · Orlando, FL')).toBeInTheDocument()
    expect(screen.getByText('AS/BS: Computer Programming and Analysis')).toBeInTheDocument()
  })

  it('renders UCF Coding Bootcamp entry', () => {
    render(<Education />)
    expect(screen.getByText('UCF Coding Bootcamp · Orlando, FL')).toBeInTheDocument()
    expect(screen.getByText('Certificate in Full Stack Web Development')).toBeInTheDocument()
  })

  it('renders the expected graduation note for Valencia', () => {
    render(<Education />)
    expect(
      screen.getByText('AS expected Summer 2026 · BS expected Spring 2028')
    ).toBeInTheDocument()
  })

  it('does not render a note for UCF Bootcamp', () => {
    render(<Education />)
    const notes = screen.queryAllByText(/expected/)
    expect(notes).toHaveLength(1)
  })
})

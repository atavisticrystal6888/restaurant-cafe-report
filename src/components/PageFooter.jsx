import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export default function PageFooter({ onPrev, onNext, prevLabel, nextLabel }) {
  return (
    <div className="page-footer">
      <button className="footer-btn" onClick={onPrev} disabled={!onPrev}>
        <FiChevronLeft /> {prevLabel}
      </button>
      <button className="footer-btn primary" onClick={onNext} disabled={!onNext}>
        {nextLabel} <FiChevronRight />
      </button>
    </div>
  )
}

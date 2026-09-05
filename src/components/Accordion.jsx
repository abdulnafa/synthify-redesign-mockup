import { useId, useRef, useState } from 'react'
import { Minus, Plus } from 'lucide-react'

function Accordion({
  items = [],
  defaultOpenIndex = -1,
  allowMultiple = false,
  className = '',
  headingLevel = 3,
}) {
  const instanceId = useId().replace(/:/g, '')
  const buttonsRef = useRef([])
  const [openItems, setOpenItems] = useState(
    () => new Set(defaultOpenIndex >= 0 ? [defaultOpenIndex] : []),
  )
  const Heading = `h${Math.min(6, Math.max(2, headingLevel))}`
  const safeItems = Array.isArray(items) ? items : []

  const toggleItem = (index) => {
    setOpenItems((current) => {
      const next = allowMultiple ? new Set(current) : new Set()

      if (current.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }

      return next
    })
  }

  const handleKeyDown = (event, index) => {
    let nextIndex

    if (event.key === 'ArrowDown') nextIndex = (index + 1) % safeItems.length
    if (event.key === 'ArrowUp') nextIndex = (index - 1 + safeItems.length) % safeItems.length
    if (event.key === 'Home') nextIndex = 0
    if (event.key === 'End') nextIndex = safeItems.length - 1

    if (nextIndex !== undefined) {
      event.preventDefault()
      buttonsRef.current[nextIndex]?.focus()
    }
  }

  const classes = ['accordion', className].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      {safeItems.map((item, index) => {
        const label = item.question || item.title
        const content = item.answer ?? item.content
        const isOpen = openItems.has(index)
        const itemId = item.id || `${instanceId}-${index}`
        const triggerId = `accordion-trigger-${itemId}`
        const panelId = `accordion-panel-${itemId}`

        return (
          <article
            className={`accordion__item${isOpen ? ' accordion__item--open' : ''}`}
            key={item.id || label || index}
          >
            <Heading className="accordion__heading">
              <button
                ref={(node) => {
                  buttonsRef.current[index] = node
                }}
                id={triggerId}
                className="accordion__trigger"
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
              >
                <span className="accordion__question">{label}</span>
                <span className="accordion__icon" aria-hidden="true">
                  {isOpen ? <Minus /> : <Plus />}
                </span>
              </button>
            </Heading>
            <div
              id={panelId}
              className="accordion__panel"
              role="region"
              aria-labelledby={triggerId}
              hidden={!isOpen}
            >
              <div className="accordion__answer">{content}</div>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Accordion

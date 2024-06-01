import React from 'react'

export default ({
  replain,
  checked,
  handleSelect
}: {
  replain: string
  checked: string[]
  handleSelect: (r: string) => void
}) => {
  const handleOnClick = (r: string) => {
    handleSelect(r)
  }

  return (
    <button
      type="button"
      className="flights__filter"
      onClick={() => handleOnClick(replain)}
    >
      <input
        type="checkbox"
        onChange={() => {}}
        checked={checked.includes(replain)}
      />
      <span>{replain}</span>
    </button>
  )
}

import { ChangeEvent } from 'react'

type ActionProps = {
  handleSearch: () => void
  value: string
  handleChange: React.Dispatch<React.SetStateAction<string>>
}

export const Action = ({ handleChange, handleSearch, value }: ActionProps) => {
  const onHandleChange = (event: ChangeEvent<HTMLInputElement>) =>
    handleChange(event.target.value)

  return (
    <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
      <input
        type="text"
        placeholder="@usuario"
        value={value}
        onChange={onHandleChange}
        className="w-full rounded-full border border-input bg-transparent px-5 py-2 text-input outline-none placeholder:text-input"
      />
      <button
        type="button"
        onClick={handleSearch}
        className="rounded-full border border-input bg-button px-8 py-2 text-input hover:opacity-75"
      >
        Buscar
      </button>
    </div>
  )
}

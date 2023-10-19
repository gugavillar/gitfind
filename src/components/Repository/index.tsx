import { PropsWithChildren } from 'react'

export const Repository = ({ children }: PropsWithChildren) => {
  return (
    <div className="mt-5 flex flex-col overflow-y-scroll">
      <h3 className="mb-6 text-center text-2xl font-semibold text-white">
        Repositórios
      </h3>
      <ol className="space-y-4">{children}</ol>
    </div>
  )
}

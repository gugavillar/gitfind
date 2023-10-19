import { PropsWithChildren } from 'react'

export const Wrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="mx-auto mt-12 max-w-5xl space-y-8 px-5 sm:px-12">
      {children}
    </div>
  )
}

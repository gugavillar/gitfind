import { PropsWithChildren } from 'react'

export const Wrapper = ({ children }: PropsWithChildren) => {
  return <div className="mt-12 max-w-3xl space-y-8 px-12">{children}</div>
}

import { Progress } from '@components/Progress'

type EmptyStateProps = {
  isLoading: boolean
}

export const EmptyState = ({ isLoading }: EmptyStateProps) => {
  return (
    <div>
      <h3 className="text-center text-lg text-white">
        Busque um usuário para visualizar os dados
      </h3>
      {isLoading ? <Progress /> : null}
    </div>
  )
}

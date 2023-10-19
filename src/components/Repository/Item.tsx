type ItemProps = {
  repositoryName: string
  repositoryUrl: string
  repositoryDescription: string | null
}

export const Item = ({
  repositoryDescription,
  repositoryName,
  repositoryUrl,
}: ItemProps) => {
  return (
    <li className="space-y-2 border-b border-profile pb-5">
      <a href={repositoryUrl} className="text-xl text-link">
        {repositoryName}
      </a>
      <p className="text-lg text-input">{repositoryDescription}</p>
    </li>
  )
}

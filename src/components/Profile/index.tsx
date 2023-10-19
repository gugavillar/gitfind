type ProfileProps = {
  imageUrl: string
  name: string | null
  user: string
  description: string | null
}

export const Profile = ({
  description,
  imageUrl,
  name,
  user,
}: ProfileProps) => {
  return (
    <div className="mx-auto flex gap-4 border-b border-profile pb-6">
      <img
        src={imageUrl}
        alt="foto do perfil do usuário"
        className="h-24 w-24 rounded-full border border-profile"
      />
      <div className="space-y-3 text-xl text-input">
        <div>
          <p>{user}</p>
          <p>{name}</p>
        </div>
        <p className="text-lg text-input">{description}</p>
      </div>
    </div>
  )
}

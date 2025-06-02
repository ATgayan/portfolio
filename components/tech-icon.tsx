import Image from "next/image"

interface TechIconProps {
  name: string
  icon: string
  color: string
}

export function TechIcon({ name, icon, color }: TechIconProps) {
  return (
    <div className="flex flex-col items-center">
      <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${color} flex items-center justify-center mb-3`}>
        <Image src={icon || "/placeholder.svg"} alt={name} width={40} height={40} className="w-8 h-8 md:w-10 md:h-10" />
      </div>
      <span className="text-sm md:text-base font-medium">{name}</span>
    </div>
  )
}

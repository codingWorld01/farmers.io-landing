import Image from "next/image"

interface TestimonialCardProps {
  name: string
  role: string
  quote: string
  imageSrc: string
}

export default function TestimonialCard({ name, role, quote, imageSrc }: TestimonialCardProps) {
  return (
    <div className="bg-green-50 rounded-lg p-6 shadow-sm">
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          width={60}
          height={60}
          className="rounded-full object-cover"
        />
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
      <p className="italic text-muted-foreground">"{quote}"</p>
    </div>
  )
}


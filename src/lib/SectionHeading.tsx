interface SectionHeadingProps {
    title: string;
    description: string;
}

export default function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="mb-8">
        <h2 className="text-white text-center text-5xl font-semibold">
            {title}
          </h2>
          <p className="mt-3.5 text-gray-200 max-w-md text-lg text-center mx-auto">
            {description}
          </p>
    </div>
  )
}

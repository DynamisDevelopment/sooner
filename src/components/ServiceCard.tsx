type ServiceCardProps = {
  title: string
  description: string
  link: string
  icon: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  link,
  icon,
}) => (
  <div className="bg-white shadow p-4 rounded-lg text-center">
    <div className="text-3xl text-primary">{icon}</div>
    <h3 className="text-lg font-bold mt-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
    <a href={link} className="text-blue-500 hover:underline">
      Read More
    </a>
  </div>
)
export default ServiceCard

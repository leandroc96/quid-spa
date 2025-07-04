import { Card } from 'react-bootstrap';
import './ServiceCard.css';

interface ServiceCardProps {
  Icon: React.ElementType;
  title: string;
  description: string;
}

function ServiceCard({ Icon, title, description }: ServiceCardProps) {
  return (
    <Card className="text-center ">
      <Card.Body className="card-body-custom">
        <Icon size={50} className="text-primary mb-3" />
        <Card.Title>{title}</Card.Title>
        <Card.Text className="card-text-custom">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ServiceCard;

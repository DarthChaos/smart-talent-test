interface CardProps {
  src: string;
  alt?: string;
  title: string;
  price: string;
  taxes: string;
  location: string;
  hasButton?: boolean;
  buttonLabel?: string;
}

interface CardDescriptiveSectionProps {
  img: React.JSX.Element;
  title: string;
  value: string;
}

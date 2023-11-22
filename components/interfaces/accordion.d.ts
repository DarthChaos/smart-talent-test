export interface AccordionProps {
  accordions: {
    title: string;
    content: string | string[] | React.ReactNode;
    isAble?: boolean;
    tagMessage?: string;
  }[];
}

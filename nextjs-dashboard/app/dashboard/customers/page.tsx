interface PageProps {
  text: string;
}

export default function Page({ text }: PageProps) {
  return <div>{text}</div>;
}

export default function Dashboard({ params }: { params: { lang: string } }) {
  return <div>Dashboard - {params.lang}</div>;
}

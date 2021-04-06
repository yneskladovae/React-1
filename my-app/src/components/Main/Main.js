export default function Main(props) {
  const avatar = props.avatar;
  return (
    <main>
      <img src={avatar.image} alt={avatar.alt} />
    </main>
  );
}
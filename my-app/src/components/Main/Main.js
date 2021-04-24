function Main(props) {
  const { avatar: {image, alt} } = props;
  return (
    <main>
      <img src={image} alt={alt} />
    </main>
  );
}

export default Main;
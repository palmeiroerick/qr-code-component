import Image from "next/image";

const Home = () => {
  return (
    <main>
      <Image
        src="/assets/image-qr-code.png"
        alt="qr code image"
        height={150}
        width={150}
      />
      <h2>Improve your front-end skills by building projects</h2>
      <p>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </main>
  );
};

export default Home;

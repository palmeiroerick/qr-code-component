import Image from "next/image";

const QRCode = () => {
  return (
    <Image
      src="/assets/image-qr-code.png"
      alt="qr code image"
      height={150}
      width={150}
    />
  );
};

export default QRCode;

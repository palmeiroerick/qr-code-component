import Image from "next/image";

const QRCode = () => {
  return (
    <Image
      className="rounded-xl"
      src="/assets/image-qr-code.png"
      alt="qr code image"
      height={288}
      width={288}
    />
  );
};

export default QRCode;

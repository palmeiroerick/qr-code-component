import QRCode from "@/components/QRCode";
import Text from "@/components/Text";
import Title from "@/components/Title";

const Home = () => {
  return (
    <main className="gap-5 flex w-80 flex-col items-center rounded-2xl bg-white p-4 pb-10">
      <QRCode />
      <Title />
      <Text />
    </main>
  );
};

export default Home;

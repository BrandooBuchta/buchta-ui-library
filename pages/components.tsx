import ThemeSwitcher from "@/components/ThemeSwitcher";
import Button from "@/components/UI/Button";
import Card from "@/components/UI/Card";
import CookiesBar from "@/components/utils/CookiesBar";

const Home: React.FC = () => {
  const callMercedes = async (): Promise<void> => {
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log("mercedes");
        resolve();
      }, 5000);
    });
  };

  return (
    <div className="p-10">
      <CookiesBar />
      <p>Overall TODO: Colors</p>
      <ThemeSwitcher />

      <p className="text-2xl font-bold text-default-900">Button</p>
      <div className="gap-2 flex items-center mb-5">
        {["xs", "sm", "md", "lg", "xl"].map((e) => (
          <Button
            key={e}
            endContent={<i className="mdi mdi-heart" />}
            size={e as "xs" | "sm" | "md" | "lg" | "xl"}
            onClick={callMercedes}
          >
            Button
          </Button>
        ))}
      </div>

      <div className="gap-2 flex items-center mb-5">
        {["shadow", "solid", "tonal", "bordered", "text"].map((e) => (
          <Button
            key={e}
            color="red"
            variant={e as "shadow" | "solid" | "tonal" | "bordered" | "text"}
            onClick={callMercedes}
          >
            {e}
          </Button>
        ))}
      </div>

      <p className="text-2xl font-bold text-default-900">Card</p>

      <div className="flex gap-5 my-3">
        {["shadow", "faded", "bordered"].map((e) => (
          <Card
            key={e}
            height="500px"
            padding="20px"
            variant={e as "shadow" | "bordered" | "faded"}
            width="500px"
          >
            Mercedes
          </Card>
        ))}
      </div>

      <p>TODO: Create an async button as natural</p>
      <p>TODO: Create a variant: like shadow, minimalistic, ...</p>
    </div>
  );
};

export default Home;

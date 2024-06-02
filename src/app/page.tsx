import { Button } from '@/components';

export default function Home() {
  return (
    <main>
      <h1>main page</h1>
      <div>
        <Button size="small">Button</Button>
        <Button size="medium" color="secondary">
          Button
        </Button>
      </div>

      <div>
        <Button styleType="text" size="small">
          Button
        </Button>
        <Button color="secondary">Button</Button>
        <Button styleType="icon" hasIconOnly>
          🍔
        </Button>
        <Button styleType="icon" color="secondary">
          🍔 Burger
        </Button>
        <Button color="secondary">Button</Button>
      </div>
    </main>
  );
}

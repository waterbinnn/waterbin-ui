import { Button } from 'components';

export default function Home() {
  return (
    <main>
      <h1>main page</h1>
      <div>
        <Button size="small">Small</Button>
        <Button size="medium" color="secondary">
          medium
        </Button>
      </div>

      <div>
        <Button styleType="text" size="small">
          small text
        </Button>
        <Button color="secondary">secondary</Button>
        <Button styleType="solid">solid</Button>
        <Button styleType="icon" hasIconOnly>
          🍔
        </Button>
        <Button styleType="icon" color="secondary">
          🍔 Burger
        </Button>
        <Button color="primary">primary large</Button>
      </div>
    </main>
  );
}

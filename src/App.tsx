import { Books as OneInterfaceWithOptionals } from "./OneInterfaceWithOptionals";
import { Books as OneInterfaceWithGuardedSubUnion } from "./OneInterfaceWithGuardedSubUnion";
import { Books as UnionWithGuards } from "./UnionWithGuards";
import { Books as DiscriminatedUnion } from "./DiscriminatedUnion";

export default function App() {
  return (
    <div className="App">
      <div>
        <h1>One Interface With Optionals</h1>
        <OneInterfaceWithOptionals />
      </div>
      <hr />
      <div>
        <h1>One Interface With Guarded Sub Union</h1>
        <OneInterfaceWithGuardedSubUnion />
      </div>
      <hr />
      <div>
        <h1>Union With Guards</h1>
        <UnionWithGuards />
      </div>
      <hr />
      <div>
        <h1>Discriminated Union</h1>
        <DiscriminatedUnion />
      </div>
    </div>
  );
}

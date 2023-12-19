import { Suspense, lazy } from "react";
import { render } from "react-dom";
import { Collapsible } from "./Collapsible";

const Counter = lazy(() => import("./Counter").then((m) => ({ default: m.Counter })));

render(
	<div>
		<Collapsible open>
			<p>Hello, world!</p>
		</Collapsible>
		<Collapsible>
			<Suspense fallback={<div>Loading...</div>}>
				<Counter />
				<Counter />
			</Suspense>
		</Collapsible>
	</div>,
	document.getElementById("root")
);

console.log("Hello, world!");
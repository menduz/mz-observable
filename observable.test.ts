import { Observable } from ".";

describe("sanity tests", () => {
  it("checks once and multiple", async () => {
    let x = 0;
    let y = 0;

    let obs = new Observable<number>();

    obs.addOnce(e => {
      x += e;
    });

    obs.add(e => {
      y += e;
    });

    obs.notifyObservers(1);
    obs.notifyObservers(2);
    obs.notifyObservers(3);

    if (x !== 1) throw new Error(`x is not 1, is ${x}`);
    if (y !== 6) throw new Error(`y is not 6, is ${y}`);
  });
});

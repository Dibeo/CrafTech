ServerEvents.tags("item", (event) => {
  ["iron", "gold", "diamond"].forEach((x) => {
    event.add("forge:gears", `#forge:gears/${x}`);
  });
});

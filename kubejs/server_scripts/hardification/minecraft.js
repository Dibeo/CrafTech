ServerEvents.recipes((event) => {
  event.replaceInput(
    { output: "minecraft:bucket" },
    "#forge:ingots/iron",
    "#forge:plates/iron"
  );
});

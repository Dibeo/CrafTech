ServerEvents.recipes((event) => {
  event.replaceInput(
    { output: "minecraft:bucket" },
    "#forge:ingots/iron",
    "#forge:plates/iron"
  );

  event.shaped(
    Item.of("minecraft:enchanted_golden_apple", 1),
    ["GEG", "EAE", "GEG"],
    {
      A: "minecraft:apple",
      E: "#forge:storage_blocks/electrum",
      G: "#forge:storage_blocks/gold",
    }
  );
});

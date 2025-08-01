ServerEvents.recipes((event) => {
  event.replaceInput(
    { mod: "chunkloaders" },
    "#forge:ender_pearls",
    "mekanism:dimensional_stabilizer"
  );

  event.replaceInput(
    { mod: "chunkloaders" },
    "#forge:ingots/iron",
    "mekanism:hdpe_sheet"
  );

  event.replaceInput(
    { mod: "chunkloaders" },
    "#forge:obsidian",
    "minecraft:crying_obsidian"
  );
});

ServerEvents.recipes((event) => {
  event.replaceInput(
    { mod: "entangled" },
    "minecraft:ender_pearl",
    "#forge:gems/dimensional"
  );

  event.replaceInput(
    { mod: "entangled" },
    "#forge:chests/wooden",
    "ironchest:obsidian_chest"
  );
});

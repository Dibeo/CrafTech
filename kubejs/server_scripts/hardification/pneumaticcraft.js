ServerEvents.recipes((event) => {
  event.replaceInput(
    { mod: "pneumaticcraft" },
    "minecraft:iron_bars",
    "#forge:rods/steel"
  );

  event.replaceInput(
    { mod: "pneumaticcraft" },
    "#forge:ingots/gold",
    "#forge:plates/electrum"
  );

  event.replaceInput(
    { mod: "pneumaticcraft" },
    "#forge:gems/diamond",
    "#forge:plates/diamond"
  );
});

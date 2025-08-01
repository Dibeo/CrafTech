ServerEvents.recipes((event) => {
  event.replaceInput(
    { mod: "immersiveengineering" },
    "#forge:rods/wooden",
    "#forge:rods/treated_wood"
  );

  event.replaceInput(
    { mod: "immersiveengineering" },
    "#forge:ingots/iron",
    "#forge:ingots/steel"
  );

  event.replaceInput(
    { output: "immersiveengineering:hammer" },
    "#forge:rods/treated_wood",
    "#forge:rods/wooden"
  );

  [
    "immersiveengineering:hammer",
    "immersiveengineering:plate_iron",
    "immersiveengineering:drillhead_iron",
  ].map((p) => {
    event.replaceInput(
      { output: p },
      "#forge:ingots/steel",
      "#forge:ingots/iron"
    );
  });

  event.replaceInput(
    { output: "minecraft:piston" },
    "#forge:dusts/redstone",
    "immersiveengineering:electron_tube"
  );

  event.custom({
    type: "immersiveengineering:metal_press",
    energy: 4800,
    input: {
      tag: "forge:gems/diamond",
    },
    mold: "immersiveengineering:mold_plate",
    result: {
      tag: "forge:plates/diamond",
    },
  });

  event.custom({
    type: "immersiveengineering:metal_press",
    energy: 4800,
    input: {
      tag: "forge:ingots/netherite",
    },
    mold: "immersiveengineering:mold_plate",
    result: {
      tag: "forge:plates/netherite",
    },
  });
});

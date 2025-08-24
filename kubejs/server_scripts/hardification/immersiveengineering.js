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

  event.replaceInput(
    { output: "minecraft:piston" },
    "#forge:cobblestone",
    "pneumaticcraft:compressed_stone"
  );

  event.replaceInput(
    { output: "immersiveengineering:capacitor_mv" },
    "#forge:ingots/steel",
    "immersiveengineering:capacitor_lv"
  );

  event.replaceInput(
    { output: "immersiveengineering:capacitor_hv" },
    "#forge:ingots/steel",
    "immersiveengineering:capacitor_mv"
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
      tag: "forge:ingots/osmium",
    },
    mold: "immersiveengineering:mold_plate",
    result: {
      tag: "forge:plates/osmium",
    },
  });

  event.custom({
    type: "immersiveengineering:metal_press",
    energy: 4800,
    input: {
      base_ingredient: {
        tag: "forge:rods/blaze",
      },
      count: 4,
    },
    mold: "immersiveengineering:mold_plate",
    result: {
      tag: "forge:plates/blaze",
    },
  });

  event.custom({
    type: "immersiveengineering:metal_press",
    energy: 2400,
    input: {
      base_ingredient: {
        tag: "forge:gems/diamond",
      },
      count: 4,
    },
    mold: "immersiveengineering:mold_gear",
    result: {
      tag: "forge:gears/diamond",
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

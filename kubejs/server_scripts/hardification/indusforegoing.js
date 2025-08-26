ServerEvents.recipes((event) => {
  event.replaceInput(
    { mod: "industrialforegoing" },
    "#forge:ingots/iron",
    "#forge:ingots/compressed_iron"
  );

  event.replaceInput(
    { id: "industrialforegoing:machine_frame_pity" },
    "#forge:storage_blocks/redstone",
    "immersiveengineering:rs_engineering"
  );

  event.replaceInput(
    { input: "#forge:chests", mod: "industrialforegoing" },
    "#forge:chests",
    "pneumaticcraft:smart_chest"
  );

  ["iron", "gold", "diamond"].forEach((x) => {
    event.remove([{ id: `industrialforegoing:${x}_gear` }]);
  });

  event.replaceInput(
    { mod: "industrialforegoing" },
    "#forge:cobblestone",
    "#pneumaticcraft:compressed_stone"
  );

  event.replaceInput(
    { mod: "industrialforegoing" },
    "#forge:dusts/redstone",
    "pneumaticcraft:transistor"
  );

  let tank_unit = [
    "industrialforegoing:common_black_hole_tank",
    "industrialforegoing:pity_black_hole_tank",
    "industrialforegoing:simple_black_hole_tank",
    "industrialforegoing:advanced_black_hole_tank",
    "industrialforegoing:supreme_black_hole_tank",
  ];
  for (const i = 1; i < tank_unit.length; ++i)
    event.replaceInput(
      { mod: "industrialforegoing", output: tank_unit[i] },
      "#forge:ender_pearls",
      tank_unit[i - 1]
    );

    let item_unit = [
    "industrialforegoing:common_black_hole_unit",
    "industrialforegoing:pity_black_hole_unit",
    "industrialforegoing:simple_black_hole_unit",
    "industrialforegoing:advanced_black_hole_unit",
    "industrialforegoing:supreme_black_hole_unit",
  ];
  for (const i = 1; i < item_unit.length; ++i)
    event.replaceInput(
      { mod: "industrialforegoing", output: item_unit[i] },
      "#forge:ender_pearls",
      item_unit[i - 1]
    );
});

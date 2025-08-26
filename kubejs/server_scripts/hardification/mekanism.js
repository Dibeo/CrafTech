ServerEvents.recipes((event) => {
  event.replaceInput(
    { id: "mekanism:dimensional_stabilizer" },
    "#forge:storage_blocks/diamond",
    "#forge:gems/dimensional"
  );

  const replacements = [
    ["#forge:ingots/iron", "#forge:plates/iron"],
    ["#forge:ingots/gold", "#forge:plates/gold"],
    ["#forge:gems/diamond", "#forge:plates/diamond"],
    ["#forge:ingots/copper", "#forge:plates/copper"],
    ["#forge:ingots/steel", "#forge:plates/steel"],
    ["#forge:ingots/osmium", "#forge:plates/osmium"],
    ["#forge:glass/silica", "immersiveengineering:slag_glass"],
    ["#forge:gems/lapis", "#forge:gears/lapis"],
    ["#forge:rods/wooden", "#forge:rods/treated_wood"],
  ];

  replacements.forEach(([from, to]) => {
    event.replaceInput(
      { mod: "mekanism", not: { output: "#forge:nuggets/osmium" } },
      from,
      to
    );
  });

  [
    "mekanismgenerators:reactor_glass",
    "mekanism:structural_glass",
    "mekanism:scuba_mask",
  ].forEach((id) => {
    event.replaceInput(
      { output: id },
      "immersiveengineering:slag_glass",
      "#forge:glass/silica"
    );
  });

  replacements.forEach(([from, to]) => {
    event.replaceInput({ mod: "mekanismgenerators" }, from, to);
  });

  event.replaceInput(
    {
      mod: "mekanism",
      id: "mekanism:processing/osmium/storage_blocks/from_ingots",
    },
    "#forge:plates/osmium",
    "#forge:ingots/osmium"
  );

  event.replaceInput(
    { mod: "mekanism" },
    "#forge:dusts/redstone",
    "pneumaticcraft:transistor"
  );
  event.replaceInput(
    { mod: "mekanism" },
    "minecraft:furnace",
    "industrialforegoing:resourceful_furnace"
  );

  event.replaceInput(
    { id: "mekanism:dimensional_stabilizer" },
    "#forge:storage_blocks/diamond",
    "#forge:gems/dimensional"
  );
});

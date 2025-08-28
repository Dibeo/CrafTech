ServerEvents.recipes((event) => {
  event.remove({ id: "mekanism:compat/ae2/certus_crystal_to_dust" });

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
      { mod: "ae2" },
      from,
      to
    );
  });

  event.replaceInput(
      { mod: "ae2", output : "ae2:controller" },
      "#forge:gems/fluix",
      "#forge:gears/fluix"
    );

  event.custom({
    type: "mekanism:crushing",
    input: {
      ingredient: {
        tag: "forge:gems/certus_quartz",
      },
    },
    output: {
      item: "ae2:certus_quartz_dust",
      count: 2,
    },
  });

  event.custom({
    type: "industrialforegoing:fluid_extractor",
    breakChance: 0,
    defaultRecipe: false,
    input: {
      item: "ae2:quartz_block",
    },
    output: '{Amount:4,FluidName:"kubejs:liquid_certus_quartz"}',
    result: "ae2:quartz_block",
  });

  event.custom({
    type: "pneumaticcraft:fluid_mixer",
    input1: {
      type: "pneumaticcraft:fluid",
      amount: 50,
      fluid: "kubejs:liquid_certus_quartz",
    },
    input2: {
      type: "pneumaticcraft:fluid",
      amount: 50,
      fluid: "minecraft:water",
    },
    item_output: {
      item: "ae2:certus_quartz_crystal",
    },
    pressure: 4.5,
    time: 500,
  });

    event.remove({id : "ae2:smelting/smooth_sky_stone_block"})
    event.custom({
    type: "immersiveengineering:arc_furnace",
    additives: [
      {
        tag: "forge:dusts/hop_graphite",
      },
    ],
    energy: 10000,
    input: {
      item: "ae2:sky_stone_block",
    },
    results: [
      {
        item: "ae2:smooth_sky_stone_block",
      },
    ],
    time: 300,
  });
});

ServerEvents.recipes((event) => {
  event.remove({ id: "mekanism:compat/ae2/certus_crystal_to_dust" });

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
});

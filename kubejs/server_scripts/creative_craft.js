ServerEvents.recipes((event) => {
  event.recipes.industrialforegoing
    .dissolution_chamber(
      [
        "mekanism:pellet_antimatter",
        "mekanism:pellet_antimatter",
        "mekanism:pellet_antimatter",
        "mekanism:pellet_antimatter",
        "mekanism:pellet_antimatter",
        "mekanism:pellet_antimatter",
        "mekanism:pellet_antimatter",
        "mekanism:pellet_antimatter",
      ], // input items
      "industrialforegoing:sludge", // input fluid
      "#forge:dyes/purple", // output item
      10000 // time
    )
    .outputFluid("kubejs:liquid_antimatter");

  event.custom({
    type: "immersiveengineering:bottling_machine",
    fluid: {
      amount: 10000,
      tag: "forge:liquid_antimatter",
    },
    input: {
      item: "kubejs:empty_creative_gem",
    },
    results: [
      {
        item: "kubejs:creative_gem",
      },
    ],
  });

  const recipes = [
    [
      "pneumaticcraft:radiation_shielding_upgrade",
      "pneumaticcraft:creative_upgrade",
    ],
    [
      "#forge:storage_blocks/compressed_iron",
      "pneumaticcraft:creative_compressed_iron_block",
    ],
    ["pneumaticcraft:solar_compressor", "pneumaticcraft:creative_compressor"],
    ["ae2:item_storage_cell_256k", "ae2:creative_item_cell"],
    ["ae2:fluid_storage_cell_256k", "ae2:creative_fluid_cell"],
    ["ae2:dense_energy_cell", "ae2:creative_energy_cell"],
    ["modularrouters:puller_module_2", "modularrouters:creative_module"],
    ["immersiveengineering:capacitor_hv", "immersiveengineering:capacitor_creative"],
    ["mekanism:ultimate_fluid_tank", "mekanism:creative_fluid_tank"],
    ["mekanism:ultimate_chemical_tank", "mekanism:creative_chemical_tank"],
    ["mekanism:ultimate_bin", "mekanism:creative_bin"],
    ["mekanism:ultimate_energy_cube",'mekanism:creative_energy_cube{mekData:{EnergyContainers:[{Container:0b,stored:"1000000"}]}}'] //does not work
  ];

  recipes.forEach(([input, output]) => {
    let ingredient = {};
    if (input.startsWith("#")) {
      ingredient = { tag: input.substring(1) };
    } else {
      ingredient = { item: input };
    }

    event.custom({
      type: "mekanism:combining",
      extraInput: {
        ingredient: { tag: "forge:gems/creative" },
      },
      mainInput: {
        amount: 1,
        ingredient: ingredient,
      },
      output: { item: output },
    });
  });
});

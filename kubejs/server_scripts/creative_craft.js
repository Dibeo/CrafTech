ServerEvents.recipes((event) => {
  event.recipes.industrialforegoing.dissolution_chamber(
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
  ).outputFluid('kubejs:liquid_antimatter');

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

});
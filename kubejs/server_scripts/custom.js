ServerEvents.recipes((event) => {
  event.recipes.industrialforegoing.dissolution_chamber(
    [
      "minecraft:ender_eye",
      "#forge:storage_blocks/diamond",
      "minecraft:ender_eye",
      "ae2:singularity",
      "ae2:singularity",
      "#forge:plates/netherite",
      "industrialforegoing:laser_lens11",
      "#forge:plates/netherite",
    ], // input items
    "industrialforegoing:ether_gas", // input fluid
    "#forge:gems/dimensional", // output item
    1000 // time
  );

  event.custom({
    type: "immersiveengineering:metal_press",
    energy: 4800,
    input: {
      base_ingredient: {
        tag: "forge:gems/emerald",
      },
      count: 4,
    },
    mold: "immersiveengineering:mold_gear",
    result: {
      tag: "forge:gears/emerald",
    },
  });

  event.custom({
    type: "immersiveengineering:metal_press",
    energy: 4800,
    input: {
      base_ingredient: {
        tag: "forge:gems/lapis",
      },
      count: 4,
    },
    mold: "immersiveengineering:mold_gear",
    result: {
      tag: "forge:gears/lapis",
    },
  });

  event.shaped(Item.of("#forge:gems/coin", 1), ["PGP", "EAE", "PLP"], {
    A: "minecraft:enchanted_golden_apple",
    E: "#forge:gears/emerald",
    P: "#forge:plates/blaze",
    G: "#forge:storage_blocks/refined_glowstone",
    L: "industrialforegoing:laser_lens4",
  });

  event.shaped(Item.of("#forge:gems/raw_nether", 1), ["PGP", "NAE", "PLP"], {
    A: "minecraft:ghast_tear",
    E: "#forge:dusts/glowstone",
    N: "#forge:dusts/netherite",
    P: "#mekanism:enriched/redstone",
    G: "minecraft:magma_cream",
    L: "industrialforegoing:laser_lens14",
  });

  event.custom({
    type: "immersiveengineering:arc_furnace",
    additives: [
      {
        tag: "forge:dusts/sulfur",
      },
      { tag: "forge:dusts/blaze" },
    ],
    energy: 51200000,
    input: {
      tag: "forge:gems/raw_nether",
    },
    results: [
      {
        tag: "forge:gems/nether",
      },
    ],
    time: 1200,
  });

  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        type: "pneumaticcraft:stacked_item",
        count: 4,
        item: "minecraft:emerald_block",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 1,
        item: "industrialforegoing:laser_lens5",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 4,
        item: "minecraft:slime_block",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 4,
        item: "pneumaticcraft:plastic_brick_lime",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 1,
        item: "pneumaticcraft:module_expansion_card",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 4,
        item: "immersiveengineering:insulating_glass",
      },
    ],
    pressure: 6,
    results: [
      {
        item: "kubejs:compressed_emerald_gem",
      },
    ],
  });
});

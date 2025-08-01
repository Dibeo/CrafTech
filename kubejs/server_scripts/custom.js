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
});

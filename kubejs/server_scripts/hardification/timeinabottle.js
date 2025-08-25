ServerEvents.recipes((event) => {

    event.remove({output : "tiab:time_in_a_bottle"})
  event.recipes.industrialforegoing.dissolution_chamber(
    [
      "#forge:plates/gold",
      "#forge:gems/dimensional",
      "#forge:plates/gold",
      "#forge:gems/coin",
      "#forge:gems/nether",
      "ae2:quartz_vibrant_glass",
      "#forge:gems/compressed_emerald",
      "ae2:quartz_vibrant_glass",
    ], // input items
    "minecraft:milk", // input fluid
    "tiab:time_in_a_bottle", // output item
    10000 // time
  );
});

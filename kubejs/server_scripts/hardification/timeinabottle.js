ServerEvents.recipes((event) => {

    event.remove({output : "tiab:time_in_a_bottle"})
  event.recipes.industrialforegoing.dissolution_chamber(
    [
      "#forge:gems/coin",
      "#forge:gems/dimensional",
      "#forge:gems/nether",
    ], // input items
    "minecraft:milk", // input fluid
    "tiab:time_in_a_bottle", // output item
    10000 // time
  );
});

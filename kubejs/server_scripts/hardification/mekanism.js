ServerEvents.recipes((event) => {
  event.replaceInput(
    { mod: "mekanism", id : "mekanism:dimensional_stabilizer" },
    "#forge:storage_blocks/diamond",
    "#forge:gems/dimensional"
  );
});

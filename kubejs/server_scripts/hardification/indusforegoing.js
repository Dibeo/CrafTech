ServerEvents.recipes((event) => {
  event.replaceInput(
    { mod: "industrialforegoing" },
    "#forge:ingots/iron",
    "#forge:ingots/compressed_iron"
  );

  event.replaceInput(
    { id: "industrialforegoing:machine_frame_pity" },
    "#forge:storage_blocks/redstone",
    "immersiveengineering:rs_engineering"
  );

  event.replaceInput(
    { input: "#forge:chests", mod: "industrialforegoing" },
    "#forge:chests",
    "pneumaticcraft:smart_chest"
  );

  ["iron", "gold", "diamond"].forEach((x) => {
    event.remove([{ id: `industrialforegoing:${x}_gear` }]);
  });
});

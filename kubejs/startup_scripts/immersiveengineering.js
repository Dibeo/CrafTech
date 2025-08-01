StartupEvents.registry("item", (event) => {
  event
    .create("diamond_plate")
    .texture("immersiveengineering:item/metal_plate_diamond")
    .tag("forge:plates")
    .tag("forge:plates/diamond");

    event
    .create("netherite_plate")
    .texture("immersiveengineering:item/metal_plate_netherite")
    .tag("forge:plates")
    .tag("forge:plates/netherite");
});

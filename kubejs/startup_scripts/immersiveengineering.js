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

    event
    .create("blaze_plate")
    .texture("immersiveengineering:item/metal_plate_blaze")
    .tag("forge:plates")
    .tag("forge:plates/blaze");

    event
    .create("osmium_plate")
    .texture("immersiveengineering:item/metal_plate_osmium")
    .tag("forge:plates")
    .tag("forge:plates/osmium");
});

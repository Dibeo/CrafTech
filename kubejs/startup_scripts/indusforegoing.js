StartupEvents.registry("item", (event) => {
  event
    .create("emerald_gear")
    .texture("industrialforegoing:item/emerald_gear")
    .tag("forge:gears")
    .tag("forge:gears/emerald");

    event
    .create("lapis_lazuli_gear")
    .texture("industrialforegoing:item/lapis_lazuli_gear")
    .tag("forge:gears")
    .tag("forge:gears/lapis");

    event
    .create("fluix_gear")
    .texture("industrialforegoing:item/fluix_gear")
    .tag("forge:gears")
    .tag("forge:gears/fluix");
});

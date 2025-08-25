// priority: 0

StartupEvents.registry("item", (event) => {
  Platform.mods.kubejs.name = "CrafTech";
  event.create("coin").texture("kubejs:item/coin");

  event
    .create("dimensional_gem")
    .texture("kubejs:item/dimensional_gem")
    .glow(true)
    .rarity("rare")
    .fireResistant(true)
    .tag("forge:gems")
    .tag("forge:gems/dimensional");

  event
    .create("nether_gem")
    .texture("kubejs:item/nether_gem")
    .glow(true)
    .rarity("rare")
    .fireResistant(true)
    .tag("forge:gems")
    .tag("forge:gems/nether");

  event
    .create("raw_nether_gem")
    .texture("kubejs:item/raw_nether_gem")
    .rarity("uncommon")
    .tag("forge:gems")
    .tag("forge:gems/raw_nether");

  event
    .create("coin_gem")
    .texture("kubejs:item/coin_gem")
    .glow(true)
    .rarity("rare")
    .fireResistant(true)
    .tag("forge:gems")
    .tag("forge:gems/coin");

  event
    .create("creative_gem")
    .texture("kubejs:item/creative_gem")
    .glow(true)
    .rarity("supreme")
    .fireResistant(true)
    .tag("forge:gems")
    .tag("forge:gems/creative");

  event
    .create("empty_creative_gem")
    .texture("kubejs:item/empty_creative_gem")
    .rarity("uncommon")
    .tag("forge:gems")
    .tag("forge:gems/empty_creative");
});

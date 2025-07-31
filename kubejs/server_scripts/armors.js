// priority: 0

const armors = [
  [
    `minecraft:leather_helmet`,
    `minecraft:leather_chestplate`,
    `minecraft:leather_leggings`,
    `minecraft:leather_boots`,
  ],
  [
    `mekanismtools:lapis_lazuli_helmet`,
    `mekanismtools:lapis_lazuli_chestplate`,
    `mekanismtools:lapis_lazuli_leggings`,
    `mekanismtools:lapis_lazuli_boots`,
  ],
  [
    `immersiveengineering:armor_faraday_helmet`,
    `immersiveengineering:armor_faraday_chestplate`,
    `immersiveengineering:armor_faraday_leggings`,
    `immersiveengineering:armor_faraday_boots`,
  ],
  [
    `minecraft:golden_helmet`,
    `minecraft:golden_chestplate`,
    `minecraft:golden_leggings`,
    `minecraft:golden_boots`,
  ],
  [
    `minecraft:chainmail_helmet`,
    `minecraft:chainmail_chestplate`,
    `minecraft:chainmail_leggings`,
    `minecraft:chainmail_boots`,
  ],
  [
    `minecraft:iron_helmet`,
    `minecraft:iron_chestplate`,
    `minecraft:iron_leggings`,
    `minecraft:iron_boots`,
  ],
  [
    `pneumaticcraft:compressed_iron_helmet`,
    `pneumaticcraft:compressed_iron_chestplate`,
    `pneumaticcraft:compressed_iron_leggings`,
    `pneumaticcraft:compressed_iron_boots`,
  ],
  [
    `immersiveengineering:armor_steel_helmet`,
    `immersiveengineering:armor_steel_chestplate`,
    `immersiveengineering:armor_steel_leggings`,
    `immersiveengineering:armor_steel_boots`,
  ],
  [
    `mekanismtools:bronze_helmet`,
    `mekanismtools:bronze_chestplate`,
    `mekanismtools:bronze_leggings`,
    `mekanismtools:bronze_boots`,
  ],
  [
    `mekanismtools:steel_helmet`,
    `mekanismtools:steel_chestplate`,
    `mekanismtools:steel_leggings`,
    `mekanismtools:steel_boots`,
  ],
  [
    `mekanismtools:osmium_helmet`,
    `mekanismtools:osmium_chestplate`,
    `mekanismtools:osmium_leggings`,
    `mekanismtools:osmium_boots`,
  ],
  [
    `minecraft:diamond_helmet`,
    `minecraft:diamond_chestplate`,
    `minecraft:diamond_leggings`,
    `minecraft:diamond_boots`,
  ],
  [
    `mekanismtools:refined_glowstone_helmet`,
    `mekanismtools:refined_glowstone_chestplate`,
    `mekanismtools:refined_glowstone_leggings`,
    `mekanismtools:refined_glowstone_boots`,
  ],
];

const materials = [
  //`#forge:leathers`,
  `#forge:gems/lapis`,
  `#forge:plates/aluminum`,
  `#forge:ingots/gold`,
  `#forge:nuggets/iron`,
  `#forge:ingots/iron`,
  `#forge:ingots/compressed_iron`,
  `#forge:plates/steel`,
  `#forge:ingots/bronze`,
  `#forge:ingots/steel`,
  `#forge:ingots/osmium`,
  `#forge:gems/diamond`,
  `#forge:ingots/refined_glowstone`,
];

/**
 * M : actual tier materials
 * P : preivous armor piece
 */
const patterns = {
  helmet: [`MMM`, `MPM`],
  chestplate: [`MPM`, `MMM`, `MMM`],
  leggings: [`MMM`, `MPM`, `M M`],
  boots: [`M M`, `MPM`],
};

const armor = [`helmet`, `chestplate`, `leggings`, `boots`];

ServerEvents.recipes((event) => {
  for (let i = 1; i < armors.length; ++i) {
    for (let j = 0; j < armors[i].length; ++j) {
      let output = armors[i][j];
      let previous = armors[i - 1][j];
      let material = Ingredient.of(materials[i - 1]);
      event.remove({ output: output });
      event.shaped(output, patterns[armor[j]], {
        M: material,
        P: previous,
      });
    }
  }

  //Netherite
  armor.forEach((part) => {
    event.replaceInput(
      { output: `minecraft:netherite_${part}` },
      `minecraft:diamond_${part}`,
      `mekanismtools:refined_glowstone_${part}`
    );
  });

  //Refined Obsi
  armor.forEach((part) => {
    const output = `mekanismtools:refined_obsidian_${part}`;
    const previous = `minecraft:netherite_${part}`;
    const pattern = patterns[part];

    event.remove({ output: output });
    event.shaped(output, pattern, {
      M: `#forge:ingots/refined_obsidian`,
      P: previous,
    });
  });

  //Pneumatic armor
  const pneuma_pattern = ['APA', 'AMA', 'AAA'];
  // Pneumatic helmet
  event.remove({ output: `pneumaticcraft:pneumatic_helmet` });
    event.shaped(`pneumaticcraft:pneumatic_helmet`, pneuma_pattern, {
      M: `mekanismtools:refined_obsidian_helmet`,
      P: `pneumaticcraft:printed_circuit_board`,
      A: `pneumaticcraft:air_canister`
    });

  // Pneumatic chestplate
  event.remove({ output: `pneumaticcraft:pneumatic_chestplate` });
    event.shaped(`pneumaticcraft:pneumatic_chestplate`, pneuma_pattern, {
      M: `mekanismtools:refined_obsidian_chestplate`,
      P: `pneumaticcraft:printed_circuit_board`,
      A: `pneumaticcraft:air_canister`
    });

  // Pneumatic leggings
  event.remove({ output: `pneumaticcraft:pneumatic_leggings` });
    event.shaped(`pneumaticcraft:pneumatic_leggings`, pneuma_pattern, {
      M: `mekanismtools:refined_obsidian_leggings`,
      P: `pneumaticcraft:printed_circuit_board`,
      A: `pneumaticcraft:air_canister`
    });

  // Pneumatic boots
    event.remove({ output: `pneumaticcraft:pneumatic_boots` });
    event.shaped(`pneumaticcraft:pneumatic_boots`, pneuma_pattern, {
      M: `mekanismtools:refined_obsidian_boots`,
      P: `pneumaticcraft:printed_circuit_board`,
      A: `pneumaticcraft:air_canister`
    });

  //Mekasuit
  event.replaceInput(
    { output: `mekanism:mekasuit_helmet` },
    `minecraft:netherite_helmet`,
    `pneumaticcraft:pneumatic_helmet`
  );
  event.replaceInput(
    { output: `mekanism:mekasuit_bodyarmor` },
    `minecraft:netherite_chestplate`,
    `pneumaticcraft:pneumatic_chestplate`
  );
  event.replaceInput(
    { output: `mekanism:mekasuit_pants` },
    `minecraft:netherite_leggings`,
    `pneumaticcraft:pneumatic_leggings`
  );
  event.replaceInput(
    { output: `mekanism:mekasuit_boots` },
    `minecraft:netherite_boots`,
    `pneumaticcraft:pneumatic_boots`
  );
});
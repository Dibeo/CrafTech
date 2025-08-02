ServerEvents.recipes((event) => {
  event.remove({ id: "minecraft:piston" });

  function fermenter(input, output, outamount) {
    event.custom({
      type: "immersiveengineering:fermenter",
      fluid: { fluid: output, amount: outamount },
      input: { item: input },
      energy: 6400,
    });
  }

  function squeezer(inputTag, output, outamount) {
    event.custom({
      type: "immersiveengineering:squeezer",
      fluid: { fluid: output, amount: outamount },
      input: { tag: inputTag },
      energy: 6400,
    });
  }

  function thermo_plant(input, output, outamount) {
    event.custom({
      type: "pneumaticcraft:thermo_plant",
      item_input: { item: input },
      fluid_input: {
        type: "pneumaticcraft:fluid",
        tag: "pneumaticcraft:yeast_culture",
        amount: 100,
      },
      fluid_output: { fluid: output, amount: outamount },
      temperature: { min_temp: 303, max_temp: 333 },
      exothermic: true,
    });
  }

  function thermo_planttag(inputTag, output, outamount) {
    event.custom({
      type: "pneumaticcraft:thermo_plant",
      item_input: { tag: inputTag },
      fluid_output: { fluid: output, amount: outamount },
      temperature: { min_temp: 303, max_temp: 333 },
      exothermic: true,
    });
  }

  const ethanolItems = [
    ["minecraft:potato", 80],
    ["minecraft:melon_slice", 20],
    ["minecraft:sweet_berries", 50],
    ["minecraft:apple", 80],
    ["minecraft:sugar_cane", 80],
    ["minecraft:honey_bottle", 250],
    ["minecraft:glow_berries", 100],
    ["minecraft:beetroot", 40],
    ["minecraft:poisonous_potato", 160],
  ];

  const oilTags = [
    ["forge:seeds", 100, 120],
    ["forge:crops", 50, 70],
  ];

  // Fermenter & Thermo Plant (ethanol)
  ethanolItems.forEach(([item, amount]) => {
    thermo_plant(item, "immersiveengineering:ethanol", amount * 1.25);
  });

  // Squeezer & Thermo Plant Tag (plant oil / vegetable oil)
  oilTags.forEach(([tag, squeezerAmt, thermoAmt]) => {
    squeezer(tag, "immersiveengineering:plantoil", squeezerAmt);
    thermo_planttag(tag, "immersiveengineering:plantoil", thermoAmt);
  });

  [
    "pneumaticcraft:thermo_plant/ethanol_from_sweet_berries",
    "pneumaticcraft:thermo_plant/ethanol_from_sugar",
    "pneumaticcraft:thermo_plant/ethanol_from_potato",
    "pneumaticcraft:thermo_plant/ethanol_from_poisonous_potato",
    "pneumaticcraft:thermo_plant/ethanol_from_apple",
    "pneumaticcraft:thermo_plant/ethanol_from_melon",
    //plantoil
    "pneumaticcraft:thermo_plant/vegetable_oil_from_crops",
    "pneumaticcraft:thermo_plant/vegetable_oil_from_seeds",
  ].map((x) => {
    event.remove({ id: x });
  });

  event.remove({ input: "pneumaticcraft:ethanol_bucket" });
  event.replaceInput({}, "#forge:ethanol", "immersiveengineering:ethanol");
  event.replaceOutput({}, "#forge:ethanol", "immersiveengineering:ethanol");

  event.remove({ input: "pneumaticcraft:ethanol_bucket" });
  event.replaceInput({}, "#forge:plantoil", "immersiveengineering:plantoil");
  event.replaceOutput({}, "#forge:plantoil", "immersiveengineering:plantoil");

  event.remove({ input: "pneumaticcraft:biodiesel" });
  event.replaceInput({}, "#forge:biodiesel", "immersiveengineering:biodiesel");
  event.replaceOutput({}, "#forge:biodiesel", "immersiveengineering:biodiesel");

  event.remove({ id : "pneumaticcraft:fluid_mixer/biodiesel"})
  event.remove({ output : "pneumaticcraft:ethanol_bucket"})

  event.custom({
    type: "pneumaticcraft:fluid_mixer",
    fluid_output: {
      amount: 50,
      fluid: "immersiveengineering:biodiesel",
    },
    input1: {
      type: "pneumaticcraft:fluid",
      amount: 25,
      fluid: "immersiveengineering:plantoil",
    },
    input2: {
      type: "pneumaticcraft:fluid",
      amount: 25,
      fluid: "immersiveengineering:ethanol",
    },
    item_output: {
      item: "pneumaticcraft:glycerol",
    },
    pressure: 2.0,
    time: 300,
  });
});

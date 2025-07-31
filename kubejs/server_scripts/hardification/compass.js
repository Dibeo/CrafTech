ServerEvents.recipes((event) => {
  ["explorerscompass:explorerscompass", "naturescompass:naturescompass"].map(
    (p) => {
      event.replaceInput(
        { output: p },
        "minecraft:compass",
        "minecraft:recovery_compass"
      );
    }
  );
});

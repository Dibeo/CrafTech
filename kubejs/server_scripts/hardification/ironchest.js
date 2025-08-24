ServerEvents.recipes((event) => {
  event.replaceInput(
    { mod : "ironchest" },
    "#forge:ingots/iron",
    "#forge:plates/iron"
  );

  event.replaceInput(
    { mod : "ironchest" },
    "#forge:ingots/gold",
    "#forge:plates/gold"
  );

  event.replaceInput(
    { mod : "ironchest" },
    "#forge:gems/diamond",
    "#forge:plates/diamond"
  );

  event.replaceInput(
    { mod : "ironchest" },
    "#forge:ingots/copper",
    "#forge:plates/copper"
  );


});

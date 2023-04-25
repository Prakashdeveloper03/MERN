const parts = [
  ["Monitors", "LCD Screens, LED Screens, Vibrant Colors"],
  ["Motherboards", "Fast"],
  ["Chips", "i9, i7, i5, i3, Core2Duo, Pentium, Very Fast"],
  ["Hard Drives", "2TB, 1TB, 100-500 GB, Fast Reading"],
  ["DVD-ROMs", "Burn CDs, Burn DVDs"],
  ["Cases", "ATX, AT, Mini, Other Sizes, Choice of Colors"],
  ["Power Supplies", "we can get one for any computer!"],
];

const partsTableBody = document.getElementById("partsTableBody");
for (let i = 0; i < parts.length; i++) {
  const partName = parts[i][0];
  const partFeatures = parts[i][1];
  const newRow = document.createElement("tr");
  newRow.innerHTML = `<td>${partName}</td><td>${partFeatures}</td>`;
  partsTableBody.appendChild(newRow);
}

const fs = require("fs");
const path = require("path");

const inputPath = path.resolve(process.cwd(), process.argv[2] || "title.json");
const outputPath = path.resolve(process.cwd(), process.argv[3] || "title.sorted.json");

function readTitles(filePath) {
    const raw = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(raw);

    if (!Array.isArray(data) || !data.every((item) => typeof item === "string")) {
        throw new Error("JSON は文字列の配列である必要があります。");
    }

    return data;
}

function sortByTextLength(items) {
    return [...items].sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        }

        return a.localeCompare(b, "ja");
    });
}

function writeTitles(filePath, items) {
    const json = `${JSON.stringify(items, null, 2)}\n`;
    fs.writeFileSync(filePath, json, "utf8");
}

function main() {
    const titles = readTitles(inputPath);
    const sortedTitles = sortByTextLength(titles);

    writeTitles(outputPath, sortedTitles);

    console.log(`Sorted ${sortedTitles.length} titles.`);
    console.log(`Input: ${inputPath}`);
    console.log(`Output: ${outputPath}`);
}

main();
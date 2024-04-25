#!/usr/bin/env node
import inquirer from "inquirer";
inquirer
    .prompt([
    {
        name: "paragraph",
        message: "Enter a paragraph to count words and characters:",
        type: "input",
    },
])
    .then((answers) => {
    const text = answers?.paragraph.replace(/\s+/g, " ").trim();
    const characterCount = text.replace(/\s+/g, "").length;
    const wordCount = text.split(" ").length;
    console.log("No. of Characters in given paragraph are", characterCount);
    console.log("No. of Words in given paragraph are", wordCount);
})
    .catch((error) => {
    if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
    }
    else {
        // Something else went wrong
    }
});

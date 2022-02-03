// Made by ARWENT

const axios = require("axios");
const fs = require("fs");

async function fetchShop() {
    const shopData = (await axios("https://api.nitestats.com/v1/epic/store")).data;

    if (!shopData) { return null; }
    else return shopData;
}

module.exports = {
    getRetailShop: () => {
        return new Promise(async (res, rej) => {
            console.log("[Arwent] Obtention de la boutique du jour, veuillez patienter...");

            const shopData = await fetchShop();

            if (!shopData) res(false);
            else {
                fs.writeFileSync("./shop.json", JSON.stringify(shopData, null, 4), { flag: "w" });
                res(true);
            }
        })
    }
}
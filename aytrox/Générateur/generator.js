// Made By AYTROX

const fs = require('fs');
const { default : axios } = require('axios');
const option = require('../config.json').option;
const consoleoutput = require('./consoleoutput');
const empty = require('./empty_athena.json');

if (option == 1 && 2) {

consoleoutput.log(`Générateur créer par \x1b[31mAYTROX\x1b[0m`)

    class backend {
        get directory() {
            return `${__dirname}`;
        };

        loadProfile() {
            return JSON.parse(fs.readFileSync(`${this.directory}/profile_athena.json`));
        };

        loadProfile_emptyathena() {
            return JSON.parse(fs.readFileSync(`${this.directory}/empty_athena.json`));
        };

        loadProfile_emptycore() {
            return JSON.parse(fs.readFileSync(`${this.directory}/empty_common_core.json`))
        };

        loadProfile_new() {
            return JSON.parse(fs.readFileSync((`${this.directory}/profile_athena.json`)));
        };


        loadProfile_common() {
            return JSON.parse(fs.readFileSync(`${this.directory}/profile_common_core.json`));
        };

        async Version() {
                const Version = (await axios.get("https://fortnite-api.com/v2/aes")).data.data;
                consoleoutput.log(`Version des Cosmetics: \x1b[32m${Version.build}\x1b[0m`),
            consoleoutput.log(`\x1b[33mAjouts des Cosmetics...\x1b[0m`);
        }

        async updatecreated() {
            while (true) {
                var athenacreat = this.loadProfile_emptyathena();


                athenacreat.created = `${new Date().toISOString()}`


                fs.writeFileSync(`${this.directory}/empty_athena.json`, JSON.stringify(athenacreat, null, 1));
                await new Promise(r => setTimeout(r, 1000000));
            }
        };

        async updateAthena() {
            var loadathena = this.loadProfile_emptyathena();
            fs.writeFileSync(`${this.directory}/profile_athena.json`, JSON.stringify({}, null, 2)),
            fs.writeFileSync(`${this.directory}/profile_athena.json`, JSON.stringify(loadathena, null, 2));
            while (true) {
                const req = await axios.get("https://fortnite-api.com/v2/cosmetics/br?language=fr");
                var athena = this.loadProfile("athena");
                var items = req.data.data;

                athena.updated = `${new Date().toISOString()}`
    
                items.forEach(
                    cosmetic => {
                        var cosmeticName = cosmetic.name;

                        var cosmeticVariants = [];

                        var time = cosmetic.added;
    
                        if (cosmetic.variants) {
                            cosmetic.variants.forEach(
                                variant => {
                                    var owned = [];
                                    variant.options.forEach(option => {owned.push(option.tag)});
                                    cosmeticVariants.push({
                                            'channel': variant.channel,
                                            'active': owned[0],
                                            'owned': owned
                                        })
                                })
                        };
                        var costype = cosmetic.type.backendValue
    
                        athena.items[`${costype}:${cosmetic.id}`] = {
                            'templateId': `${costype}:${cosmetic.id}`,
                            'attributes': {
                                'max_level_bonus': 99999,
                                'level': 9999,
                                'item_seen': true,
                                'rnd_sel_cnt': 0,
                                'xp': 9999,
                                'variants': cosmeticVariants,
                                'creation_time': time,
                                'favorite': false,
                                'name': cosmeticName
                            },
                            'quantity': 1
                        };
                        })
                fs.writeFileSync(`${this.directory}/profile_athena.json`, JSON.stringify(athena, null, 2));
                consoleoutput.log('Les Cosmetics on été ajouté dans \x1b[31m./aytrox/Générateur\x1b[0m > \x1b[34mprofile_athena.json\x1b[0m & \x1b[34mprofile_common_core.json\x1b[0m');
                await new Promise(r => setTimeout(r, 1000000));
            }
        };

        async updateAthena_new() {
            var loadathena = this.loadProfile_emptyathena();
            fs.writeFileSync(`${this.directory}/profile_athena.json`, JSON.stringify({}, null, 2)),
            fs.writeFileSync(`${this.directory}/profile_athena.json`, JSON.stringify(loadathena, null, 2))
            while (true) {
                const req = await axios.get("https://fortnite-api.com/v2/cosmetics/br/new");
                var athena_new = this.loadProfile_new("athena_new");
                var items = req.data.data.items;

                athena_new.updated = `${new Date().toISOString()}`
    
                items.forEach(
                    cosmetic => {
                        var cosmeticName = cosmetic.name;

                        var cosmeticVariants = [];

                        var time = cosmetic.added;
    
                        if (cosmetic.variants) {
                            cosmetic.variants.forEach(
                                variant => {
                                    var owned = [];
                                    variant.options.forEach(option => {owned.push(option.tag)});
                                    cosmeticVariants.push({
                                            'channel': variant.channel,
                                            'active': owned[0],
                                            'owned': owned
                                        })
                                })
                        };
    
                        athena_new.items[`${cosmetic.type.backendValue}:${cosmetic.id}`] = {
                            'templateId': `${cosmetic.type.backendValue}:${cosmetic.id}`,
                            'attributes': {
                                'max_level_bonus': 99999,
                                'level': 9999,
                                'item_seen': true,
                                'rnd_sel_cnt': 0,
                                'xp': 9999,
                                'variants': cosmeticVariants,
                                'creation_time': time,
                                'favorite': false,
                                'name': cosmeticName
                            },
                            'quantity': 1
                        };
                    }
                )
                fs.writeFileSync(`${this.directory}/profile_athena.json`, JSON.stringify(athena_new, null, 2));
                consoleoutput.log('Les Cosmetics on été ajouté dans ./aytrox/Générateur> profile_athena.json & profile_common_core.json');
                await new Promise(r => setTimeout(r, 1000000));
            }
        };

        async updateAthena_banner() {
            var loadcore = this.loadProfile_emptycore();
            fs.writeFileSync(`${this.directory}/profile_common_core.json`, JSON.stringify(loadcore, null, 3));
            while (true) {
                
                const req1 = await axios.get("https://fortnite-api.com/v1/banners");
                var athena_banner = this.loadProfile_common("common_core");
                var items_banner = req1.data.data;
                    athena_banner.updated = `${new Date().toISOString()}`
        
                items_banner.forEach(
                    banner => {
                        var name = banner.name;
                        var devname = banner.devName;
                        var categories = banner.category;
        
                        athena_banner.items[`HomebaseBannerIcon:${banner.id}`] = {
                            'templateId': `HomebaseBannerIcon:${banner.id}`,
                            'attributes': {
                                'item_seen': true,
                                'devName': devname,
                                'categories': categories,
                                'name': name,
                            },
                            'quantity': 1
                        };
                    }
                )
                fs.writeFileSync(`${this.directory}/profile_common_core.json`, JSON.stringify(athena_banner, null, 2))
            }
        };

            async updateAthena_color() {
                while (true) {
                    const req2 = await axios.get("https://fortnite-api.com/v1/banners/colors");
                    var athena_color = this.loadProfile_common("common_core");
                    var items_color = req2.data.data;
        
                    items_color.forEach(
                        color => {
                            var col = color.color;
                            var categories = color.category;
        
                            athena_color.items[`HomebaseBannerColor:${color.id}`] = {
                                'templateId': `HomebaseBannerColor:${color.id}`,
                                'attributes': {
                                    'item_seen': true,
                                    'color': col,
                                    'categories': categories
                                },
                                'quantity': 1
                            };
                        }
                    )
                    fs.writeFileSync(`${this.directory}/profile_common_core.json`, JSON.stringify(athena_color, null, 2))
                }
            };

    init() {
        this.Version();
        if (option == 1) {
            this.updateAthena();
        }
        if (option == 2) {
            this.updateAthena_new();
        }
        if (empty.created == "") {
        this.updatecreated();
        }
        this.updateAthena_banner();
        this.updateAthena_color();
    };
};
    backendClass = new backend();
    backendClass.init();
}
        
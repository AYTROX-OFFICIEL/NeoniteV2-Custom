const { default: axios } = require("axios");
const { application } = require('express');
const actus = require ('../aytrox/config.json').new;


/**
 * 
 * @param {application} app 
 * @param {String} port 
 */

if (actus == 1) {
    module.exports = (app, port) => {
        //var lastest = await axios.get("https://api.nitestats.com/v1/epic/builds/fltoken")
        app.get(["/content/api/pages/fortnite-game", "/content/api/pages/"], async (req, res) => {
            const fortnite_game = (await axios.get("https://fortnitecontent-website-prod07.ol.epicgames.com/content/api/pages/fortnite-game", {
                headers: {
                    "Accept-Language": "fr"
                }
            })).data
            const motds = (await axios.get("https://fortnite-api.com/v2/news/br?language=fr")).data.data.motds;
            const video = (await axios.get("https://api.nitestats.com/v1/epic/prm/motd?lang=fr")).data.contentItems
    
            fortnite_game.battleroyalenewsv2.news.motds = [];
            // Ajout du message dans le salon par AYTROX
            fortnite_game.emergencynoticev2 = {
                    "jcr:isCheckedOut": true,
                    "_title": "emergencynoticev2",
                    "_noIndex": false,
                    "emergencynotices": {
                        "_type": "Emergency Notices",
                        "emergencynotices": [
                            {
                                "hidden": false,
                                "_type": "CommonUI Emergency Notice Base",
                                "title": "Custom by AYTROX & ARWENT",
                                "body": "Customized by ARWENT & AYTROX\r\nNeonite made by kemo (@xkem0x)",
                            }
                        ]
                    },
                    "_activeDate": "2018-08-06T19:00:26.217Z",
                    "lastModified": "2021-03-17T15:07:27.924Z",
                    "_locale": "en-US"
            };
            // créer par ARWENT (modifié par AYTROX)
            motds.forEach((motd) => {
                fortnite_game.battleroyalenewsv2.news.motds.push({
                    "image": motd.image,
                    "tileImage": motd.tileImage,
                    "tabTitleOverride": motd.tabTitle,
                    "entryType": "Text",
                    "hidden": false,
                    "videoMute": false,
                    "_type": "CommonUI Simple Message MOTD",
                    "offerAction": motd.offerAction,
                    "title": motd.title,
                    "body": motd.body,
                    "offerId": motd.offerId,
                    "videoLoop": false,
                    "videoStreamingEnabled": true,
                    "sortingPriority": motd.sortingPriority,
                    "buttonTextOverride": "",
                    "id": motd.id,
                    "videoUID": motd.videoId,
                    "videoVideoString": motd.videoString,
                    "videoAutoplay": false,
                    "videoFullscreen": false,
                    "spotlight": false
                });
            });
    
            res.send(fortnite_game), console.log('[ARWENT] Les actualité du jour on été chargé avec succès');
        })
    }
};
    if (actus == 2) {
        // Ajout par AYTROX
        module.exports = (app, port) => {
            //var lastest = await axios.get("https://api.nitestats.com/v1/epic/builds/fltoken")
            app.get(["/content/api/pages/fortnite-game", "/content/api/pages/"], async (req, res) => {
                // version Fr By ARWENT
                const content = (await axios.get("https://fortnitecontent-website-prod07.ol.epicgames.com/content/api/pages/fortnite-game", {
                headers: {
                    "Accept-Language": "fr"
                }
            }).catch()).data

            content.playlistinformation = {
                "is_tile_hidden": true,
                "frontend_matchmaking_header_style": content.playlistinformation.frontend_matchmaking_header_style,
                "conversion_config": {
                    "containerName": "playlist_info",
                    "_type": "Conversion Config",
                    "enableReferences": true,
                    "contentName": "playlists"
                },
                "jcr:isCheckedOut": true,
                "_metaTags": content.playlistinformation._metaTags,
                "show_ad_violator": content.playlistinformation.show_ad_violator,
                "_title": "playlistinformation",
                "frontend_matchmaking_header_text_description": "test",
                "frontend_matchmaking_header_text": "AYTROX & ARWENT",
                "playlist_info": {
                    "_type": "Playlist Information",
                    "playlists": content.playlistinformation.playlist_info.playlists
                },
                "_noIndex": false,
                "jcr:baseVersion": "a7ca237317f1e72dc0b229-ab9a-451d-9b05-336a30e04d66",
                "_activeDate": "2018-04-25T15:05:39.956Z",
                "lastModified": content.playlistinformation.lastModified,
                "_locale": "fr"
            }

            content.emergencynotices = {
                    "news": {
                        "platform_messages": [],
                        "_type": "Battle Royale News",
                        "messages": [{
                            "hidden": false,
                            "_type": "CommonUI Simple Message Base",
                            "subgame": "br",
                            "body": "Customized by ARWENT & AYTROX\r\nNeonite made by kemo (@xkem0x)",
                            "title": "Custom by AYTROX & ARWENT",
                            "spotlight": false
                        },
                        ],
                    },
            }

            content.emergencynoticev2 = {
                    "jcr:isCheckedOut": true,
                    "_title": "emergencynoticev2",
                    "_noIndex": false,
                    "emergencynotices": {
                        "_type": "Emergency Notices",
                        "emergencynotices": [
                            {
                                "hidden": false,
                                "_type": "CommonUI Emergency Notice Base",
                                "title": "Custom by AYTROX & ARWENT",
                                "body": "Customized by ARWENT & AYTROX\r\nNeonite made by kemo (@xkem0x)",
                            }
                        ]
                    },
            }

            content.battleroyalenewsv2 = {
                    "news": {
                        "motds": [{
                            "entryType": "Website",
                            "image": `http://127.0.0.1:${port}/neonitev2-customnew1920.png`,
                            "tileImage": `http://127.0.0.1:${port}/neonitev2-customnew2150.png`,
                            "videoMute": false,
                            "hidden": false,
                            "tabTitleOverride": "Neonite V2 Customized",
                            "_type": "CommonUI Simple Message MOTD",
                            "title": "AYTROX & ARWENT",
                            "body": "Neonite V2 Cutomized by AYTROX & ARWENT\r\nNeonite Made by Kemo (@xkem0x)",
                            "videoLoop": false,
                            "videoStreamingEnabled": false,
                            "sortingPriority": 2,
                            "id": "NeoniteNewsBR",
                            "offerAction": "ShowOfferDetails",
                            "videoAutoplay": false,
                            "videoFullscreen": false,
                            "spotlight": false,
                            "websiteURL": "https://aytrox.com",
                            "websiteButtonText": "Site AYTROX"
                        },
                    {
                        "entryType": "Text",
                        "image": `http://127.0.0.1:${port}/neonite-news1920.png`,
                        "tileImage": `http://127.0.0.1:${port}/neonite-news2150.png`,
                        "videoMute": false,
                        "hidden": false,
                        "tabTitleOverride": "Neonite",
                        "_type": "CommonUI Simple Message MOTD",
                        "title": "Neonite V2",
                        "body": "Neonite V2 Made by Kemo (@xkem0x)\r\nTwitter: https://twitter.com/xkem0x",
                        "videoLoop": false,
                        "videoStreamingEnabled": false,
                        "sortingPriority": 2,
                        "id": "NeoniteNewsBR",
                        "videoAutoplay": false,
                        "videoFullscreen": false,
                        "spotlight": false
                    }],
                    "_type": content.battleroyalenewsv2.news._type
                    },
                    "jcr:isCheckedOut": true,
                    "_title": content.battleroyalenewsv2._title,
                    "_noIndex": false,
                    "alwaysShow": content.battleroyalenewsv2.alwaysShow,
                    "jcr:baseVersion": "a7ca237317f1e79ee19d39-8d63-4e9d-89bc-f518364e0486",
                    "_activeDate": "2020-01-21T14:00:00.000Z",
                    "lastModified": content.battleroyalenewsv2.lastModified,
                    "_locale": "fr"
            }

            content.dynamicbackgrounds = {
                    "jcr:isCheckedOut": true,
                    "backgrounds": {
                        "backgrounds": [
                            {
                                "backgroundimage": `http://127.0.0.1:${port}/Neonite-CustomLobby.png`,
                                "stage": "defaultnotris",
                                "_type": "DynamicBackground",
                                "key": "lobby"
                            },
                            {
                                "backgroundimage": `http://127.0.0.1:${port}/NeoniteShop.png`,
                                "stage": "defaultnotris",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            }
                        ],
                        "_type": "DynamicBackgroundList"
                    },
                    "_title": "dynamicbackgrounds",
                    "_noIndex": false,
                    "jcr:baseVersion": "a7ca237317f1e7d188123f-e295-4c9c-bbfa-8ca21732135c",
                    "_activeDate": "2021-08-26T23:58:00.000Z",
                    "lastModified": "2022-01-06T13:05:25.917Z",
                    "_locale": "fr"
                }

            content.shopCarousel = {
                    "jcr:isCheckedOut": true,
                    "itemsList": {
                        "_type": "ShopCarouselItemList",
                        "items": [{
                            "tileImage": `http://127.0.0.1:${port}/neonite-news1920.png`,
                            "fullTitle": "AYTROX-ARWENT",
                            "hidden": false,
                            "_type": "ShopCarouselItem",
                            "landingPriority": 90,
                            "action": "ShowOfferDetails",
                            "offerId": "",
                            "title": "AYTROX-ARWENT"
                        }]
                    },
                    "_title": "shop-carousel",
                    "_noIndex": false,
                    "jcr:baseVersion": "a7ca237317f1e78e18be74-a121-436a-9fdf-b6b999044cf7",
                    "_activeDate": "2020-09-25T12:00:00.000Z",
                    "lastModified": content.shopCarousel.lastModified,
                    "_locale": "fr"
            }

            content.battlepasspurchase = {
                    "battlePassPurchaseDisclaimer": "Neonite V2 Custom by AYTROX & ARWENT, si il y a des beugs de langue 'Fr' venez sur mon serveur: https://dsc.gg/AYTROX, (Il y aura toujours la dernière version de Neonite V2 sur mon github.)",
                    "battlePassPurchaseBackgroundURL": `http://127.0.0.1:${port}/neonitev2-customnew2150.png`,
                    "jcr:isCheckedOut": true,
                    "_title": "BattlePassPurchase",
                    "battlePassPurchaseConfirmBackgroundURL": content.battlepasspurchase.battlePassPurchaseConfirmBackgroundURL,
                    "battlePassPurchaseDescription": "Acheter le passe de combat \"Par AYTROX & ARWENT!!!\"",
                    "_noIndex": false,
                    "jcr:baseVersion": "a7ca237317f1e7946095f9-bb6e-4501-8148-78a6438ae66f",
                    "_activeDate": "2021-09-22T19:16:48.784Z",
                    "lastModified": content.battlepasspurchase.lastModified,
                    "_locale":"fr"
            }

            content.crewscreendata = {
                    "benefits": {
                        "recurringBenefits": content.crewscreendata.benefits.recurringBenefits,
                "_type": "Crew Benefits"
                    },
                    "jcr:isCheckedOut": true,
                    "crewDisclaimer": "Neonite V2 Custom by AYTROX & ARWENT Si il y a des beugs de lang \"Fr\" venez sur mon discord: https://dsc.gg/AYTROX",
                    "defaultData": {
                        "backgroundURL": content.crewscreendata.defaultData.backgroundURL,
                        "_type": "Crew Default Data",
                        "description": "Recevez le Passe de combat de la saison en cours et d'autres avantages ! Sélectionnez les cases pour en savoir plus !",
                        "title": "Neonite-V2 Customized by AYTROX & ARWENT"
                    },
                    "_title": "crewscreendata",
                    "_noIndex": false,
                    "jcr:baseVersion":"a7ca237317f1e7938fdaa7-4191-49e7-9df7-7ff8663065b6",
                    "_activeDate": "2022-01-28T18:00:00.000Z",
                    "lastModified": content.crewscreendata.lastModified,
                    "locale": "fr"
                }

            content._suggestedPrefetch = [
                    `http://127.0.0.1:${port}/neonitev2-customnew1920.png`,
                    `http://127.0.0.1:${port}/neonitev2-customnew2150.png`
            ]

        res.send(content)
    })
    //implementation needed in the future, response example: https://api.nitestats.com/v1/epic/prm/motd
    /*app.post("/api/v1/fortnite-br/surfaces/motd/target", (req, res) => {
        res.status(404).end();
    })*/
}
}

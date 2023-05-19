import React from "react";
import ReactDOM from "react-dom/client";

const Heading = ( ) => {
    return(
        <div className="heading">
            <img src="https://i.pinimg.com/originals/3c/b2/4f/3cb24f7d0defcb91eb51b091325d5f47.jpg" className="logo" />
            <div className="nav-bar-wrap">

                <ul className="nav-bar"> 
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestList = [
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "576459",
        "name": "La Pino'z Pizza",
        "uuid": "ea7c53c6-f085-4d8c-9592-e288fd6497f4",
        "city": "15",
        "area": "Sadar Bazaar",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "vx5pvbfjtypvrnn8hfdp",
        "cuisines": [
          "Pizzas",
          "Pastas",
          "Italian",
          "Desserts",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 46,
        "minDeliveryTime": 46,
        "maxDeliveryTime": 46,
        "slaString": "46 MINS",
        "lastMileTravel": 7.199999809265137,
        "slugs": {
          "restaurant": "la-pino’z-pizza-hazratganj-hazratganj-2",
          "city": "lucknow"
        },
        "cityState": "15",
        "address": "UPPER GOUND FLOOR, KHASRA NO- 602, ARJUNGANJ BAZAR, SARSAWAN, LUCKNOW., Lucknow Tahsil, Lucknow, Uttar Pradesh-226002",
        "locality": "Arjunganj",
        "parentId": 4961,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 4500,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 4500,
          "message": "",
          "title": "Delivery Charge",
          "amount": "4500",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6675216~p=1~eid=00000188-2d12-8b76-58db-369a00da012a",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "7.1 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "576459",
          "deliveryTime": 46,
          "minDeliveryTime": 46,
          "maxDeliveryTime": 46,
          "lastMileTravel": 7.199999809265137,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.9",
        "totalRatings": 500,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "59122",
        "name": "Sardar Ji Ke Mashoor Chhole Bhature",
        "uuid": "ef64242d-3026-404b-a0dd-055ff5445d98",
        "city": "15",
        "area": "Lalbagh",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "ifckr4auq9wbtvmodgme",
        "cuisines": [
          "North Indian",
          "Punjabi"
        ],
        "tags": [
          
        ],
        "costForTwo": 5000,
        "costForTwoString": "₹50 FOR TWO",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "slaString": "22 MINS",
        "lastMileTravel": 0.699999988079071,
        "slugs": {
          "restaurant": "sardar-ji-ke-mashoor-chhole-bhature-lalbagh-hazratganj",
          "city": "lucknow"
        },
        "cityState": "15",
        "address": "42, Near Novelty Cinema, Lalbagh, Lucknow",
        "locality": "",
        "parentId": 6646,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.6 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "59122",
          "deliveryTime": 22,
          "minDeliveryTime": 22,
          "maxDeliveryTime": 22,
          "lastMileTravel": 0.699999988079071,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.2",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "65094",
        "name": "Sardar ji Ke Mashoor Chhole Bhature Punjabi Zaiqa",
        "uuid": "0dae27b8-ec6a-45c3-880c-af9429464c1c",
        "city": "15",
        "area": "Lalbagh",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "qlrgb6tidtiqm0bsxeap",
        "cuisines": [
          "Punjabi",
          "North Indian",
          "Desserts",
          "Thalis",
          "Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 6000,
        "costForTwoString": "₹60 FOR TWO",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "slaString": "23 MINS",
        "lastMileTravel": 0.699999988079071,
        "slugs": {
          "restaurant": "punjabi-zaika-hazratganj-hazratganj",
          "city": "lucknow"
        },
        "cityState": "15",
        "address": "beside al zaika, lalbagh",
        "locality": "",
        "parentId": 178214,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.6 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹299",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "65094",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "lastMileTravel": 0.699999988079071,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.0",
        "totalRatings": 5000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "304774",
        "name": "M&H Bakery by Madhurima(Patrakarpuram)",
        "uuid": "ca0622a6-c9e2-4f70-a6e6-0c0b34049d95",
        "city": "15",
        "area": "Gomti Nagar",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "de1g5h2b1qsfoghz63hj",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Snacks"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "slaString": "30 MINS",
        "lastMileTravel": 6.400000095367432,
        "slugs": {
          "restaurant": "m&h-bakery-by-madhurima-gomti-nagar-gomti-nagar",
          "city": "lucknow"
        },
        "cityState": "15",
        "address": "A3/175, Vinay Khand, gomtinagar",
        "locality": "Vinay Khand",
        "parentId": 8218,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 4000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 4000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "4000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6708002~p=4~eid=00000188-2d12-8b76-58db-369b00da0407",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "6.4 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "304774",
          "deliveryTime": 30,
          "minDeliveryTime": 30,
          "maxDeliveryTime": 30,
          "lastMileTravel": 6.400000095367432,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.3",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "64991",
        "name": "Rattilal's Aminabad",
        "uuid": "c907873a-ea0c-4907-a9cd-9ebcbb9ab20d",
        "city": "15",
        "area": "Aminabad",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "vsdxtvuz2czmvdgcsggq",
        "cuisines": [
          "Sweets",
          "North Indian",
          "Snacks"
        ],
        "tags": [
          
        ],
        "costForTwo": 6000,
        "costForTwoString": "₹60 FOR TWO",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "slaString": "23 MINS",
        "lastMileTravel": 1.899999976158142,
        "slugs": {
          "restaurant": "ratti-lals-aminabad-hazratganj",
          "city": "lucknow"
        },
        "cityState": "15",
        "address": "B-12, Sania Market, Rattilal Chauraha, Shivaji Marg, Aminabad, Lucknow",
        "locality": "Shivaji Marg",
        "parentId": 6338,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.8 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "64991",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "lastMileTravel": 1.899999976158142,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.8",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "79252",
        "name": "Ajay Khaste (Hussain Ganj)",
        "uuid": "ecc79987-3e0e-4498-9c07-cba5a23f1245",
        "city": "15",
        "area": "Husain Ganj",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "tf6zjjlsk30mpnmckn5f",
        "cuisines": [
          "Snacks",
          "North Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 15000,
        "costForTwoString": "₹150 FOR TWO",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "slaString": "25 MINS",
        "lastMileTravel": 1.600000023841858,
        "slugs": {
          "restaurant": "ajay-khaste-husainganj-charbagh",
          "city": "lucknow"
        },
        "cityState": "15",
        "address": "Shop No 4 Near Hotel Raj, Husain Ganj",
        "locality": "",
        "parentId": 28273,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.6 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹299",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "79252",
          "deliveryTime": 25,
          "minDeliveryTime": 25,
          "maxDeliveryTime": 25,
          "lastMileTravel": 1.600000023841858,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.8",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "65082",
        "name": "Classic Radhey Sweets",
        "uuid": "b4cda86a-a21f-4771-b676-b35096b43056",
        "city": "15",
        "area": "Mahanagar",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "hogs5exnbgrll77362qy",
        "cuisines": [
          "Sweets",
          "Navratri Special"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "slaString": "27 MINS",
        "lastMileTravel": 3.9000000953674316,
        "slugs": {
          "restaurant": "classic-radhey-sweets-gole-market-indira-nagar",
          "city": "lucknow"
        },
        "cityState": "15",
        "address": "M-28, GOLE MARKET, MAHANAGAR, LKO, LUCKNOW (UTTAR PRADESH) - 226006",
        "locality": "Mandir Marg",
        "parentId": 63739,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2500,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2500,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2500",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6793784~p=7~eid=00000188-2d12-8b76-58db-369c00da0758",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3.9 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹299",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "65082",
          "deliveryTime": 27,
          "minDeliveryTime": 27,
          "maxDeliveryTime": 27,
          "lastMileTravel": 3.9000000953674316,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.2",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "433372",
        "name": "Mr. Brown- DANBRO",
        "uuid": "34670402-7088-477d-94d9-03a8aa866f75",
        "city": "15",
        "area": "Nirala Nagar",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "2c469b5d88f84b7495b9825d06e4bb9b",
        "cuisines": [
          "Bakery",
          "Italian",
          "Snacks",
          "Healthy Food",
          "Pizzas",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "slaString": "27 MINS",
        "lastMileTravel": 3.5,
        "slugs": {
          "restaurant": "mr-brown-mahanagar-mahanagar",
          "city": "lucknow"
        },
        "cityState": "15",
        "address": "\"SHOP NO 03-V V-01  VISHWAVIDYALYA  METRO STATION  NEAR LUCKNOW  UNIVERSITY  LUCKNOW,  Lucknow, Uttar  Pradesh-226007\"",
        "locality": "Babuganj",
        "parentId": 2262,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2500,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2500,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2500",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6708114~p=25~eid=00000188-2d12-8b76-58db-36a200da1930",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3.5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "433372",
          "deliveryTime": 27,
          "minDeliveryTime": 27,
          "maxDeliveryTime": 27,
          "lastMileTravel": 3.5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.3",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "133782",
        "name": "Cafe Coffee Day",
        "uuid": "6f1b8919-ce08-44ad-bea0-05a1ffdec409",
        "city": "15",
        "area": "Hazratganj",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "nber2vixmlbl3dekqoh1",
        "cuisines": [
          "Beverages",
          "Snacks",
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "slaString": "22 MINS",
        "lastMileTravel": 0.699999988079071,
        "slugs": {
          "restaurant": "cafe-coffee-day-hazrat-gunj-hazratganj",
          "city": "lucknow"
        },
        "cityState": "15",
        "address": "Mg Marg, Hazratganj Crossing, Hazratganj,Near Vidhan Sabha",
        "locality": "MG Marg",
        "parentId": 1,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.6 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "133782",
          "deliveryTime": 22,
          "minDeliveryTime": 22,
          "maxDeliveryTime": 22,
          "lastMileTravel": 0.699999988079071,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "686362",
        "name": "H.P. Bakers",
        "uuid": "e0993c2a-3f4e-41fc-abc7-2493c2e21cc9",
        "city": "15",
        "area": "Gomti Nagar",
        "totalRatingsString": "Too Few Ratings",
        "cloudinaryImageId": "60a8b98fc9d14de1acff6cad0731923b",
        "cuisines": [
          "Bakery"
        ],
        "tags": [
          
        ],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 34,
        "minDeliveryTime": 34,
        "maxDeliveryTime": 34,
        "slaString": "34 MINS",
        "lastMileTravel": 6.099999904632568,
        "slugs": {
          "restaurant": "h.p.-bakers-gomti-nagar-gomti-nagar",
          "city": "lucknow"
        },
        "cityState": "15",
        "address": "GWARI, VIKASH KHAND-5 GOMTINAGAR LUCKNOW,RAFI AHMAD KIDWAI, NAGAR NIGAM FOOD SAFETY ZONE-15 226010",
        "locality": "Nagar Nigam Food Safety Zone-15",
        "parentId": 409125,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 4000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 4000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "4000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6762767~p=10~eid=00000188-2d12-8b76-58db-369d00da0a53",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "6 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "686362",
          "deliveryTime": 34,
          "minDeliveryTime": 34,
          "maxDeliveryTime": 34,
          "lastMileTravel": 6.099999904632568,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "--",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "461532",
        "name": "Starbucks Coffee",
        "uuid": "41c16ffe-075b-4b85-b76c-f066aa80ed5a",
        "city": "15",
        "area": "Sapru Marg",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "f9ac2c765637d42a9802cf703ced07d8",
        "cuisines": [
          "Beverages",
          "Cafe",
          "Snacks",
          "Desserts",
          "Bakery",
          "Ice Cream"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 19,
        "minDeliveryTime": 19,
        "maxDeliveryTime": 19,
        "slaString": "19 MINS",
        "lastMileTravel": 0.699999988079071,
        "slugs": {
          "restaurant": "starbucks-coffee-hazratganj-hazratganj",
          "city": "lucknow"
        },
        "cityState": "15",
        "address": "Tata Starbucks Pvt Ltd, G1,Shagun Palace,Opp Mr Brown Bakery, Sapru Marg, Hazratganj, Lucknow, Uttar Pradesh 226001",
        "locality": "Shagun Palace",
        "parentId": 195515,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.6 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "ABOVE ₹900",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "461532",
          "deliveryTime": 19,
          "minDeliveryTime": 19,
          "maxDeliveryTime": 19,
          "lastMileTravel": 0.699999988079071,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 500,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "59654",
        "name": "Subway",
        "uuid": "89b415ec-256f-4b13-aadb-1c3c4302ae61",
        "city": "15",
        "area": "Hazratganj",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "0bf19a82b109b40c2f5c56d00f071a33",
        "cuisines": [
          "Healthy Food",
          "Salads",
          "Snacks",
          "Desserts",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "slaString": "23 MINS",
        "lastMileTravel": 0.8999999761581421,
        "slugs": {
          "restaurant": "subway-hazratganj-hazratganj",
          "city": "lucknow"
        },
        "cityState": "15",
        "address": "6, Sapru Marg, Hazratganj, Lucknow",
        "locality": "Sapru Marg",
        "parentId": 2,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.8 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "59654",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "lastMileTravel": 0.8999999761581421,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "103385",
        "name": "Ram Asrey",
        "uuid": "be271d78-20eb-4088-a594-31e9330ca206",
        "city": "15",
        "area": "Hazratganj",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "e74rotky4rxzvtcgztx7",
        "cuisines": [
          "Snacks",
          "Desserts",
          "Sweets"
        ],
        "tags": [
          
        ],
        "costForTwo": 15000,
        "costForTwoString": "₹150 FOR TWO",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "slaString": "23 MINS",
        "lastMileTravel": 1.2000000476837158,
        "slugs": {
          "restaurant": "ram-asrey-hazratganj-hazratganj",
          "city": "lucknow"
        },
        "cityState": "15",
        "address": "43/48, Nawal Kishore Road, Near Leela Theatre, Hazratganj, Lucknow",
        "locality": "Nawal Kishore Road",
        "parentId": 166229,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.2 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹299",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "103385",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "lastMileTravel": 1.2000000476837158,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.2",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "73285",
        "name": "Curry Leaf",
        "uuid": "ea5d9b6f-144b-44c6-a29b-707eae77fde6",
        "city": "15",
        "area": "Hazratganj",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "yvgkuftflvgxfotwy3gd",
        "cuisines": [
          "South Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 33,
        "minDeliveryTime": 33,
        "maxDeliveryTime": 33,
        "slaString": "33 MINS",
        "lastMileTravel": 1.2000000476837158,
        "slugs": {
          "restaurant": "curry-leaf-hazratganj-hazratganj",
          "city": "lucknow"
        },
        "cityState": "15",
        "address": "SHOP NO. 3, Behind HANUMAN MANDIR, HAZRATGANJ",
        "locality": "Ashok Marg",
        "parentId": 66911,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.2 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹299",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "73285",
          "deliveryTime": 33,
          "minDeliveryTime": 33,
          "maxDeliveryTime": 33,
          "lastMileTravel": 1.2000000476837158,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.2",
        "totalRatings": 5000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "61739",
        "name": "The Cherry Tree Bakery & Cafe",
        "uuid": "a4db1bbf-7e02-4ce2-9d20-b2f8d713e149",
        "city": "15",
        "area": "Nirala Nagar",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "8b396b7aca4b55e53c647e68c2b95a93",
        "cuisines": [
          "Bakery",
          "Continental",
          "Beverages",
          "Pastas",
          "Pizzas"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 38,
        "minDeliveryTime": 38,
        "maxDeliveryTime": 38,
        "slaString": "38 MINS",
        "lastMileTravel": 4.900000095367432,
        "slugs": {
          "restaurant": "the-cherry-tree-cafe-nirala-nagar-nirala-nagar",
          "city": "lucknow"
        },
        "cityState": "15",
        "address": "7, Near Shub Muhurat Lawns, Nirala Nagar, Lucknow",
        "locality": "Aliganj Main Road",
        "parentId": 6261,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6772925~p=28~eid=00000188-2d12-8b76-58db-36a300da1c1e",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "4.9 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "61739",
          "deliveryTime": 38,
          "minDeliveryTime": 38,
          "maxDeliveryTime": 38,
          "lastMileTravel": 4.900000095367432,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.3",
        "totalRatings": 5000,
        "new": false
      },
      "subtype": "basic"
    }
  ];

const Card = (props) =>{
    const{RestObj} = props;
    const {name,cuisines,avgRating,deliveryTime,costForTwoString,cloudinaryImageId} = RestObj?.data;
    return(
            <div className="Rest-card">
                <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId } />
                <h3>{name}</h3>
                <h4>{cuisines.join(",")}</h4>
                
                <span>{avgRating} stars</span>
                <span>{deliveryTime} mins</span>
                <span>{costForTwoString}</span>
                
            </div>
    );
};


const Body = () => {
    return(
        <div className="container">
          {

            RestList.map((restaurant) => (
            <Card  key={restaurant.data.id} RestObj={restaurant}/>
            ))}
            
        </div>
    );
};

const Footer = () => {
    return(
        <div className="footer">
            <h2>This is footer.</h2>
        </div>
    );
};

const WebPage = () => {
    return(
        <div className="app">

            <Heading />
            <Body />
            <Footer />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<WebPage />);